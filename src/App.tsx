import * as stylex from "@stylexjs/stylex";
import { h1 } from "~/test";
import { color } from "~/color.stylex";

function App() {
  return <h1 {...stylex.props(color["color-red"], color[1])}>{h1}</h1>;
}

export default App;
