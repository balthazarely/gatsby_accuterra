const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve(`src/templates/Blog.jsx`);

  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { key: { eq: "blog" } } }) {
        edges {
          node {
            id
            frontmatter {
              path
              categories
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogTemplate,
      context: {},
    });
  });

  const dedupedCategories = dedupeCategories(result.data.allMarkdownRemark);
  dedupedCategories.forEach((category) => {
    reporter.info(`Creating page: category/${category}`);
    createPage({
      path: `blog/category/${category}`,
      component: require.resolve('./src/templates/CategoryList.jsx'),
      context: {
        category,
        ids: result.data.allMarkdownRemark.edges
          .filter(({ node }) => {
            return node.frontmatter.categories.includes(category);
          })
          .map(({ node }) => node.id),
      },
    });
  });
};

function dedupeCategories(allMarkdownRemark) {
  const uniqueCategories = new Set();
  allMarkdownRemark.edges.forEach(({ node }) => {
    node.frontmatter.categories.forEach((category) => {
      if (category !== 'code-sample') {
        uniqueCategories.add(category);
      }
    });
  });
  return Array.from(uniqueCategories);
}

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-javascript') {
    // turn off source-maps
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
