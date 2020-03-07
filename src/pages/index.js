import React from "react";
import TextLoop from "react-text-loop";

import Layout from "../components/layout";
import Projects from "../components/projects";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1000,
        padding: `1.45rem 0`
      }}
    >
      <code style={{ lineHeight: "2.5rem", fontSize: "24px" }}>
        I'm Karmar, a Web Developer based in Melbourne. I have recently
        graduated from <a href="https://lewagon.com">Le Wagon</a>
        .
        <br />
        <br />I currently enjoy working with{" "}
        <mark>
          <TextLoop
            children={["Ruby on Rails.", "CSS.", "HTML.", "JavaScript."]}
          />
        </mark>
      </code>
    </div>
    <Projects />
  </Layout>
);

export default IndexPage;
