import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Navbar from "../components/Navbar";
import "./all.sass";
import "./global.css";

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-16x16.png"
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href="/img/safari-pinned-tab.svg"
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <div className="max-w-lg m-auto pt-16 font-thin">
          <Navbar />
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
          <div>{children}</div>
        </div>
      </div>
    )}
  />
);

export default TemplateWrapper;
