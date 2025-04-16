import { createBrowserRouter } from "react-router";
import App from "../App";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
]);
