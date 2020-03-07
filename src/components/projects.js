import React from "react";
import { Card } from "./card";

import speedtestImage from "../images/speedtest.png";
import toolbraryImage from "../images/toolbrary.png";
import loreImage from "../images/lore.png";
import drunkImage from "../images/blinddrunk.png";
import wordgameImage from "../images/wordgame.png";
import dorkImage from "../images/dork.png";

const cardProps = [
  {
    image: loreImage,
    alt: "Lore Screenshot",
    header: "Lore",
    description: `Lore is a functioning conference search engine designed to help users
          build an understanding of relevent skills related to their chosen feild.`,
    source: "https://github.com/mrtzukuri/lore",
    liveVersion: "https://lore-agjk.herokuapp.com/"
  },
  {
    image: toolbraryImage,
    alt: "Toolbrary Screenshot",
    header: "Toolbrary",
    description: `Toolbrary is a peer to peer market place centered around the idea of
          renting and lending tools from your neighbours.`,
    source: "https://github.com/squishickle/the-toolbrary",
    liveVersion: "https://thetoolbrary-squishickle.herokuapp.com/"
  },
  {
    image: speedtestImage,
    alt: "Speed Test Code Screenshot",
    description:
      "Bash script to test the internet speed every hour. Built using Cron, Fast-cli and Bash",
    header: "Speedtest",
    source: "https://github.com/karmar4/myfirstwebsite",
    liveVersion: ""
  },
  {
    image: drunkImage,
    alt: "Blind Drunk Screenshot",
    header: "Blind Drunk",
    description: `Blind Drunk is a cocktail creating
                Web App in which you can create a
                cocktail and add ingredients doses.`,
    source: "https://github.com/karmar4/BlindDrunk",
    liveVersion: "https://blind-drunk.herokuapp.com/"
  },
  {
    image: wordgameImage,
    alt: "Longest Word Game Screenshot",
    header: "Longest Word Game",
    description: `Longest word game is a browser based game in
                which you try to create the longest word out
                of the characters given in the shortest amount of time.`,
    source: "https://github.com/karmar4/rails-longest-word-game"
  },
  {
    image: dorkImage,
    alt: "My first website Screenshot",
    description: "some description",
    header: "Ben is a Dork",
    source: "https://github.com/karmar4/myfirstwebsite",
    liveVersion: ""
  }
];

const inverse = false;

const Projects = () => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `4.45rem 0`
    }}
  >
    <h2>Projects </h2>
    {cardProps.map((props, index) => (
      <Card {...props} inverse={!(index % 2 === 0)} />
    ))}
  </div>
);

export default Projects;
