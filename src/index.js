import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
 
  return (
    <div className="App">
      <h1>React External Components</h1>

      <h3>Challenge 1</h3>
      <p>
        Import and render this component{" "}
        <a href="https://www.npmjs.com/package/react-animated-weather">
          https://www.npmjs.com/package/react-animated-weather
        </a>
      </p>

      <br />
      <h3>Challenge 2</h3>
      <p>
        Display 3 different icons and change the properties for each of them{" "}
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
