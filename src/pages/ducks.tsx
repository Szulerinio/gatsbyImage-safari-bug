import * as React from "react";
import { graphql, HeadFC, Link, PageProps, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  const data: Queries.DucksQuery = useStaticQuery(graphql`
    query Ducks {
      allImageSharp {
        nodes {
          gatsbyImageData
        }
      }
    }
  `);

  const DucksImages = data.allImageSharp.nodes.map((duck) => {
    return <GatsbyImage image={duck.gatsbyImageData} alt=""></GatsbyImage>;
  });
  return (
    <div style={{ overflow: "scroll" }}>
      <div style={{ width: "5000px", display: "flex" }}>
        <Link to="/">DUCKS!</Link>
        {DucksImages}
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
