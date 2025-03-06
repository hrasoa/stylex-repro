import * as stylex from "@stylexjs/stylex";
import { color } from "~/color.stylex";

function App() {
  return <h1 {...stylex.props(color.bg)}>hello</h1>;
}

export default App;
