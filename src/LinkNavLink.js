import React from "react";
import { Highlight } from './Highlight'

function LinkNavLink() {
  return (
    <div className="container">
      <h1>Link & Nav Link</h1>
      <h2>Link</h2>
      <ul>
        <li>It provides accessible navigation around your application.</li>
        <li>It has a `to` propery, the most commonly used is `to: string`.</li>
        <li>It can also take an object as a property, the object properties would be passed to the `location` prop.</li>
        <li>It renders as an anchor tag.</li>
      </ul>
      <Highlight code={`<div className="home-links">
  <Link to="/browserrouter">Browser Router</Link>
  <Link to="/switch-route">Switch & Route</Link>
  <Link to="/link">Link & NavLink</Link>
  <Link to="/route-props">Route props</Link>
</div>`} />
      <h2>Nav Link</h2>
      <ul>
        <li>It is a special version of the Link tag.</li>
        <li>It is used for the navbar.</li>
        <li>
          It gives styling attributes to the rendered element when it matches
          the current URL. It adds a class.
        </li>
      </ul>
      <Highlight code={`<nav className="nav">
  <NavLink to="/">Home</NavLink>
  <NavLink to="/browserrouter" activeClassName="nav-selected">
    Browser Router
  </NavLink>
  <NavLink to="/switch-route" activeClassName="nav-selected">
    Switch & Route
  </NavLink>
  <NavLink to="/link" activeClassName="nav-selected">
    Link & NavLink
  </NavLink>
  <NavLink to="/route-props" activeClassName="nav-selected">
    Route Props
  </NavLink>
  <NavLink to="/resources" activeClassName="nav-selected">
    Resources
  </NavLink>
</nav>`} />
    </div>
  );
}

export default LinkNavLink;
