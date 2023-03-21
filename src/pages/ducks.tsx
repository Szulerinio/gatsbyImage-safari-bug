import * as React from "react";
import { graphql, HeadFC, Link, PageProps, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  const data: Queries.DucksQuery = useStaticQuery(graphql`
    query Ducks {
      allImageSharp {
        nodes {
          gatsbyImageData(quality: 100)
          original {
            height
            width
          }
        }
      }
    }
  `);

  const DucksImages = data.allImageSharp.nodes.map((duck) => {
    return (
      <div>
        <GatsbyImage
          style={{
            width: duck.original!.width!,
            height: duck.original!.height!,
          }}
          image={duck.gatsbyImageData}
          alt=""
        ></GatsbyImage>
      </div>
    );
  });
  return (
    <div style={{ overflow: "scroll" }}>
      <div style={{ display: "flex", flexWrap: "nowrap" }}>
        <Link to="/">DUCKS!</Link>
        {DucksImages}
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
