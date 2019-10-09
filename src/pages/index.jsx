import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";

// Components
import Carousel from "../components/carousel";

// CSS
import "normalize.css";
import "../styles/global.scss";

export default ({ data }) => {
  const categories = data.allMarkdownRemark.edges.map(
    edge => edge.node.frontmatter,
  );
  return (
    <>
      <div className="padding">
        <h1>Awesome Earth</h1>

        <p>
          A collection of resources, services, products, and ideas that you can
          use to improve your impact on the environment.
        </p>
      </div>

      <Carousel />

      <div className="padding">
        <ul>
          {categories.map(category => {
            return (
              <li key={category.id}>
                <Link to={category.path}>{category.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            id
            path
            name
          }
        }
      }
    }
  }
`;