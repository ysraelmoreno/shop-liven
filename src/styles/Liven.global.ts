import { globalCss } from "./Theme.provider";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    "-web-font-smoothing": "antialiased",
    fontFamily: "Inter",
    background: "$background",
  },

  button: {
    cursor: "pointer",
  },

  a: {
    textDecoration: "none",
  },

  "#portal": {
    position: "absolute",
    zIndex: "99999",
    top: 0,
    left: 0,
  },
});

export default globalStyles;
