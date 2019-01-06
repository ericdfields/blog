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
        <section>
          <div className="intro">
            <p>
              Heeey. My name's Eric. I'm a web developer, or, "I work with
              computers" if you're my wife and you're introducing me to your
              grandmother for the first time.
            </p>
            <p>
              I sort of took a break from this site for a few years, and now I
              have a whole new name and a baby!
            </p>
            <p>
              I'm going to try to write some more this year and share things
              that I like.
            </p>
            <p>Right here. On this site.</p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <h2 className="text-2xl font-thin">Latest Stories</h2>
            </div>
            {posts.map(({ node: post }) => (
              <div className="content" key={post.id}>
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
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
          excerpt(pruneLength: 400)
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
