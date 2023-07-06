import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Provide the state store to components
import { applyMiddleware, legacy_createStore as createStore} from 'redux'; // For creating state store
import { createLogger } from 'redux-logger';
import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import { searchRobots } from "./reducers"; // Import reducer function

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger)); // Create state store that uses reducer searchRobots

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
