import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Provide the state store to components
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux"; // For creating state store
import { createLogger } from "redux-logger"; // Import logger for state and action logging
import thunkMiddleware from "redux-thunk"; // Import thunk for using higher order dispatch function
import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import { searchRobots, requestRobots } from "./reducers"; // Import reducer functions

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
); // Create state store that uses combined reducers

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
