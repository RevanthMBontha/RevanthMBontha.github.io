import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ReactFlowProvider } from "@xyflow/react";
import { DnDProvider } from "./DnDContext.jsx";

import "@xyflow/react/dist/style.css";

createRoot(document.getElementById("root")).render(
  <DnDProvider>
    <ReactFlowProvider>
      <App />
    </ReactFlowProvider>
  </DnDProvider>
);
