import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Counter from "./components/Counter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);
