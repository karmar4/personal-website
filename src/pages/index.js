import React from "react";
import TextLoop from "react-text-loop";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import toolbraryImage from "../images/toolbrary.png";
import drunkImage from "../images/blinddrunk.png";
import wordgameImage from "../images/wordgame.png";
import dorkImage from "../images/dork.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1000,
        padding: `0.45rem 0`
      }}
    >
      <code style={{ lineHeight: "2.5rem", fontSize: "24px" }}>
        I'm Karmar, a Web Developer based in Melbourne. I have recently
        graduated from <a href="https://lewagon.com">Le Wagon</a>
        .
        <br />
        <br />I currently enjoy woring with{" "}
        <mark>
          <TextLoop
            children={["Ruby on Rails.", "CSS.", "HTML.", "JavaScript."]}
          />
        </mark>
      </code>
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `4.45rem 0`
      }}
    >
      <h2>Projects </h2>
      <div
        className="flex-container"
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: "30px"
        }}
      >
        <div style={{ flexBasis: "40rem", flexGrow: 1 }}>
          <h3>Toolbrary </h3>
          <p />
          <p>
            Toolbrary is a peer to peer market place centered around the idea of
            renting and lending tools from your neighbours.
          </p>
          <div className="link-container">
            <p>
              <a href="https://github.com/squishickle/the-toolbrary">
                Source Code
              </a>
            </p>
            <p>
              <a href="https://thetoolbrary-squishickle.herokuapp.com/">
                Live Version
              </a>
            </p>
          </div>
        </div>
        <div
          style={{
            flexBasis: "50rem",
            flexGrow: 2,
            paddingLeft: "30px"
          }}
        >
          <img src={toolbraryImage} alt="Un-shortner Code Screenshot" />
        </div>
      </div>

      <div
        className="flex-container"
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: "30px"
        }}
      >
        <div
          style={{
            flexBasis: "50rem",
            flexGrow: 2,
            paddingRight: "20px"
          }}
        >
          <img src={wordgameImage} alt="Longest Word Game Screenshot" />
        </div>
        <div style={{ flexBasis: "40rem", flexGrow: 1 }}>
          <h3>Longest Word Game </h3>
          <p />
          <p>
            Longest word game is a browser based game in which you try to create
            the longest word out of the characters given in the shortest amount
            of time.
          </p>
          <p>
            <a href="https://github.com/karmar4/rails-longest-word-game">
              Source Code
            </a>
          </p>
        </div>
      </div>

      <div
        className="flex-container"
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: "30px"
        }}
      >
        <div style={{ flexBasis: "40rem", flexGrow: 1 }}>
          <h3>Blind Drunk</h3>
          <p />
          <p>
            Blind Drunk is a cocktail creating Web App in which you can create a
            cocktail and add ingredients doses.
          </p>
          <div className="link-container">
            <p>
              <a href="https://github.com/karmar4/BlindDrunk">Source Code</a>
            </p>
            <p>
              <a href="https://blind-drunk.herokuapp.com/">Live Version</a>
            </p>
          </div>
        </div>
        <div
          style={{
            flexBasis: "50rem",
            flexGrow: 2,
            paddingLeft: "30px"
          }}
        >
          <img src={drunkImage} alt="Blind Drunk Screenshot" />
        </div>
      </div>

      <div
        className="flex-container"
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: "30px"
        }}
      >
        <div
          style={{
            flexBasis: "50rem",
            flexGrow: 2,
            paddingRight: "20px"
          }}
        >
          <img src={dorkImage} alt="My first website Screenshot" />
        </div>
        <div style={{ flexBasis: "40rem", flexGrow: 1 }}>
          <h3>Ben is a Dork</h3>
          <p />
          <p>A single page website.</p>
          <p>
            <a href="https://github.com/karmar4/myfirstwebsite">Source Code</a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
