import React from "react";
import { Highlight } from "./Highlight";

function BrowserRouter() {
  return (
    <div className="container">
      <h1>Browser Router</h1>
      <ul>
        <li>It needs to be the parent of everything.</li>
        <li>
          When the url changes, the Router will make sure the expected component
          is displayed.
        </li>
      </ul>
      <Highlight
        code={`import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
    // all route sensitive code is wrapped into BrowserRouter
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);`}
      />
      <h2>Browser Router or Hash Router?</h2>
      <ul>
        <li>
          Browser Router uses{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/History_API"
          >
            history API
          </a>{" "}
          which is unavailable for legacy browsers.
        </li>
        <li>
          Hash Router has no limitation on supported browser and its use cases
          are not limited to SPA.
        </li>
      </ul>
      <h2>Documentation</h2>
      <a
        href="https://reacttraining.com/react-router/web/api/BrowserRouter"
      >
        React training - Browser Router
      </a>
    </div>
  );
}

export default BrowserRouter;
