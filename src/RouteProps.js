import React from "react";
import { Highlight } from "./Highlight";

function RouteProps(props) {
  console.log(props);
  return (
    <div className="container">
      <h1>Route Props</h1>
      <p>The three render methods will be passed the same three route props:</p>
      <ul>
        <li>Match</li>
        <li>Location</li>
        <li>History</li>
      </ul>

      <h2>Match</h2>
      <ul>
        <li>
          It contains info about how a Route's path matched the current URL
        </li>
        <li>
          It contains a very useful property (among others) `params` that parses
          the url parameters.
        </li>
      </ul>
      <img src="/match.png" alt="match code snippet"></img>
      <div className="example">
        Example
        <div>What's your favorite dessert?</div>
        <select
          onChange={(e) => {
            if (e.target.value > 0) {
              props.history.push(`/favoritedessert/${e.target.value}`);
            }
          }}
        >
          <option value="0">- - -</option>
          <option value="1">Rainbow Cookies</option>
          <option value="2">Slutty Brownies</option>
          <option value="3">Ben and Jerry's Half Baked</option>
          <option value="4">Cake Pops</option>
          <option value="5">Apple pie</option>
        </select>
      </div>
      <button onClick={() => props.history.goForward()}>Go forward!</button>

      <h2>History</h2>
      <li>It is used to manipulate browser's history programmatically.</li>
      <li>You can programmatically navigate using `history.push`.</li>
      <li>It has 'go back' and 'go forward' methods.</li>
      <Highlight
        code={`<div className="example">Example
  <button onClick={() => props.history.push("/")}>Go Home</button>
</div>`}
      />
      <div className="back-button-example">
        <button onClick={() => props.history.goBack()}>Go Back</button>
      </div>
      <h2>Location</h2>
      <p>
        It represents where the app is now, where you want it to go, or even
        where it was.
      </p>
      <li>You can add custom data on to a location.</li>
      <li>
        Imutable, can be important in some lifecycle methods (as an example,
        history.location is mutable).
      </li>
      <h2>Documentation</h2>
      <a
        href="https://reacttraining.com/react-router/web/api/Route/route-props"
      >
        React Training, Route Props
      </a>
    </div>
  );
}

export default RouteProps;
