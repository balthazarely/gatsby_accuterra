import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import Layout from '../layouts/layout';
import Footer from '../components/footer';
import BeatLoader from 'react-spinners/BeatLoader';
import BlogCard from '../components/ui-components/blog-card';
import Seo from '../components/seo';

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

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

const Blog = ({ data, location }) => {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState('#01ADF0');

  const postsPerPage = 6;

  // Array of all news articles
  const allNews = data.allBlogs.nodes;

  // State for the list
  const [list, setList] = useState([...allNews.slice(0, postsPerPage)]);

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false);

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(allNews.length > postsPerPage);

  // Load more button click
  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoadMore(true);
      setLoading(false);
    }, 750);
  };

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length;
      const isMore = currentLength < allNews.length;
      const nextResults = isMore
        ? allNews.slice(currentLength, currentLength + postsPerPage)
        : [];
      setList([...list, ...nextResults]);
      setLoadMore(false);
    }
  }, [loadMore, hasMore]); //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < allNews.length;
    setHasMore(isMore);
  }, [list]); //eslint-disable-line

  return (
    <Layout pageLocation={location}>
      <Seo title="Blog" />
      <div className="content items-stretch  flex-grow">
        <div className="container mx-auto">
          <div className="pt-24  ">
            <p className="my-1 text-3xl text-gray-600 font-bold">Blog</p>
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8 "
              variants={frameVariants}
              initial="hidden"
              animate="visible"
            >
              {list.map((blog) => (
                <BlogCard
                  excerpt={blog.excerpt}
                  key={blog.frontmatter.title}
                  author={blog.frontmatter.author}
                  title={blog.frontmatter.title}
                  date={blog.frontmatter.date}
                  path={blog.frontmatter.path}
                  categories={blog.frontmatter.categories}
                  thumbnail={blog.frontmatter.thumbnailImage}
                />
              ))}
            </motion.div>
          </div>
          {hasMore ? (
            <div className=" w-100 h-36 flex justify-center items-center">
              <button
                className={`py-2 px-4 m-1 bg-accuterraBlue-500 hover:bg-accuterraBlue-700 focus:ring-accuterraBlue-500 focus:ring-offset-indigo-200 text-white  transition-all ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg flex flex-row  ${
                  loading ? 'hidden ' : 'visible'
                }`}
                onClick={handleLoadMore}
              >
                Load More
              </button>
              <BeatLoader
                color={color}
                loading={loading}
                css={override}
                size={15}
              />
            </div>
          ) : (
            <div className=" w-100 h-36 flex justify-center items-center">
              {/* <p className="text-accuterraBlue-500 text-base font-semibold ">
                You've reached the end of our blog!
              </p> */}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query BlogQuery {
    allBlogs: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { key: { eq: "blog" } } }
    ) {
      nodes {
        excerpt(pruneLength: 75)
        frontmatter {
          title
          path
          date
          categories
          author
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
`;
