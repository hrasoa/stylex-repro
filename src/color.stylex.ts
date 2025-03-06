import * as stylex from "@stylexjs/stylex";
import { tokens } from "./token.stylex";

export const color = stylex.create({
  bg: {
    backgroundColor: tokens[1.5],
  },
});
