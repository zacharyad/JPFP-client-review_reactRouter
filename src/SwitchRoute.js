import React from "react";
import { Highlight } from './Highlight'

function SwitchRoute() {
  return (
    <div className="container">
      <h1>Switch & Route</h1>
      <h2>Switch</h2>

      <ul>
        <li>It renders the first child `Route` that matches the location.</li>
        <li>
          `Switch` allows to render a route exclusively. In contrast, every
          `Route` that matches the location renders inclusively.
        </li>
      </ul>

      <h2>Route</h2>
      <p>
        It's responsibility is to render some UI when its path matches the
        current URL.
      </p>
      <p>Route render methods:</p>
      <ul>
        <li>Children element</li>
        <li>Route component</li>
        <li>Route render</li>
      </ul>
      <h3>Children element</h3>
      <h3>Route component</h3>
      <p>
        A React component to render only when the location matches. It will be
        rendered with `route props`.
      </p>
      <h3>Route render</h3>
      <p>
        You can pass in a function to be called when the location matches.
        Whatever the function returns is rendered.
      </p>
      <Highlight
        code={`<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/browserrouter" component={BrowserRouter} />
  <Route path="/link" component={LinkNavLink} />
  <Route path="/switch-route" component={SwitchRoute} />
  <Route path="/resources" component={Resources} />
  <Route path="/route-props" component={RouteProps} />
  <Route path="/favoritedessert/:dessertId" component={FavoriteDessert} />
</Switch>`}
      />
      <h2>Documentation</h2>
      <a
        href="https://reacttraining.com/react-router/web/api/Switch"
      >
        React training - Switch
      </a>
      <a
        href="https://reacttraining.com/react-router/web/api/Route"
      >
        React training - Route
      </a>
    </div>
  );
}

export default SwitchRoute;
