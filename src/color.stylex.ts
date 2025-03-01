import * as stylex from "@stylexjs/stylex";
import { colorToken } from "~/color-token.stylex";

export const color = stylex.create({
  "color-red": {
    color: colorToken.red,
  },
  1: {
    backgroundColor: "blue",
  },
});
