import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h2 className="divider-text">
              <span>Latest posts</span>
            </h2>
            {posts.map(({ node: post }) => (
              <div className="content" key={post.id}>
                <h3 className="has-text-primary text-xl font-medium mb-2">
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  <small className="ml-2 font-thin text-grey-darker">
                    {post.frontmatter.date}
                  </small>
                </h3>
                <p className="mt-0">
                  {post.excerpt}
                  <br />
                  <Link className="font-medium" to={post.fields.slug}>
                    keep reading →
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
