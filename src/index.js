import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./app/App.js";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";

// Redux fails providing time value for the app, thus Redux-code blocks are commented out
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
