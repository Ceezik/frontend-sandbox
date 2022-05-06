import { createRoot } from "react-dom/client";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./app/containers/App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);

/*

TODO
- placeholder/initial data 
- store product fetched
- suspense

- perf

- startTransition

- tags select

- ARIA

- tests

- Storybook

*/
