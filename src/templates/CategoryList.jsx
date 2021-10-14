import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../layouts/layout';
import BlogCard from '../components/ui-components/blog-card';
import { capitalizeString } from '../utils/capitalizeString';
import Footer from '../components/footer';
import SEO from '../components/seo';
import { motion } from 'framer-motion';

const frameVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const CategoryList = ({
  pageContext: { category },
  data: { allMarkdownRemark },
  location,
}) => (
  <Layout pageLocation={location}>
    <SEO title={`${capitalizeString(category)} Blog Posts`} />
    <div className="content items-stretch  flex-grow">
      <div className="container mx-auto">
        <div className="py-24">
          <p className="mb-1 text-3xl  text-gray-600 font-bold">
            {capitalizeString(category)} Blog Posts
          </p>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8"
            variants={frameVariants}
            initial="hidden"
            animate="visible"
          >
            {allMarkdownRemark.edges.map(({ node }) => (
              <BlogCard
                title={node.frontmatter.title}
                key={node.frontmatter.title}
                author={node.frontmatter.author}
                date={node.frontmatter.date}
                path={node.frontmatter.path}
                categories={node.frontmatter.categories}
                thumbnail={node.frontmatter.thumbnailImage}
              />
            ))}
          </motion.div>
        </div>
      </div>{' '}
    </div>
    <Footer />
  </Layout>
);

export const query = graphql`
  query CategoryListQuery($ids: [String]!) {
    allMarkdownRemark(filter: { id: { in: $ids } }) {
      edges {
        node {
          frontmatter {
            path
            title
            author
            date
            categories
            thumbnailImage {
              childImageSharp {
                resize(height: 250) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default CategoryList;
