import { createRoot } from "react-dom/client";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./app/containers/App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);

/*

TODO
- animations

- ARIA

- tests

- Storybook

*/
