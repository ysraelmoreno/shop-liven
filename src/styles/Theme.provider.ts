import { createStitches, CSS } from "@stitches/react";

import BYT from "./Liven.theme";
// import DarkTheme from './Dark.theme';

const { css, styled, globalCss, config, getCssText, keyframes, createTheme } =
  createStitches({
    theme: BYT,
    prefix: "byt-",
    media: BYT.media,
  });

// export const darkTheme = createTheme(DarkTheme);

export { css, styled, globalCss, config, keyframes, getCssText };

export type { CSS };
