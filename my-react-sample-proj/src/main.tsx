import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { appRouter } from "./router/router.ts";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>
);
