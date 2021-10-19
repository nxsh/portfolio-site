// Create slugs for markdown posts
// Video timestamp for this part: 2hrs 20 min

// onCreateNode is a function Gatsby runs at execution time
// Here we define a custom function that will alter how this function executes
// We create a new 'slug' attribute (what is that?)
// And we tell Gatsby to add this attribute to each node that matches our if statement
// So all of our markdown file nodes used for the blog now have a 'slug' field

const path = require("path"); // We need the path as we use this to create a slug

// Create a 'node' wtf is that?
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  // For every markdown file, create a 'slug' wtf is that?
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md"); // Generate the slug
    console.log("@@@@@@@@", slug); // Show each slug on start

    // Create a slug for every markdown node
    // Now each node has a slug field!
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

// Create pages for each markdown node
// Video timestamp for this part 2hrs 40 mins

// Export a createPages function, Gatsby gets access to it and runs it a single time
// Destructure first arg to get access to graphQL and actions, what is destructuring?
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve("./src/templates/post.js");
  // graphql here returns a promise, that is why we use async
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  // 1. Get path to template
  // 2. Get markdown data
  // 3. Create new pages
  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: postTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
};
// Fix pdf
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /canvas/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
