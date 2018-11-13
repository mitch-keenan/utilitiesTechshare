// example theme.js
import { future } from "mdx-deck/themes";
import atomDark from "react-syntax-highlighter/styles/prism/atom-dark";
import prismJSON from "react-syntax-highlighter/languages/prism/json";

export const theme = {
  ...future,
  css: {
    ...future.css,
    fontSize: "16px",
    "@media screen and (min-width:64em)": {
      fontSize: "20px"
    }
  },
  colors: {
    ...future.colors,
    // Dark: #333031
    // Red: #fc363f
    // White: white
    text: "white",
    background: "#333031",
    link: "#fc363f"
  },
  heading: {
    ...future.heading,
    "letter-spacing": "unset"
    // "font-family": "'Tinos', serif"
  },
  paragraph: {
    "text-align": "left"
  },
  prism: {
    style: atomDark,
    languages: {
      json: prismJSON
    }
  }
};
