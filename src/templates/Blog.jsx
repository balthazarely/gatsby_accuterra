import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../layouts/layout';
import Footer from '../components/footer';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SEO from '../components/seo';
import HollowButtonDarkSmall from '../components/ui-components/HollowButtonDarkSmall';

export default function blog({ data, location }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const image = getImage(
    frontmatter.thumbnailImage.childImageSharp.gatsbyImageData
  );

  return (
    <Layout pageLocation={location}>
      <SEO title={frontmatter.title} />
      <div className="max-w-screen-md mx-auto px-3">
        <div className="pb-24">
          <div className="my-6 ">
            <p className=" text-4xl  text-gray-600 font-bold">
              {frontmatter.title}
            </p>
            <p className=" text-sm mt-2 font-normal  text-gray-600 ">
              {frontmatter.date}
            </p>
          </div>
          <GatsbyImage
            className="object-cover w-full "
            image={image}
            alt="blog post image"
          />
          <div
            className="markdown mt-6"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="pt-3">
            <Link to={'/blog/'}>
              <HollowButtonDarkSmall>Back to Blog</HollowButtonDarkSmall>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export const query = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        key
        thumbnailImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
