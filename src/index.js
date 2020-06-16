import { render } from "solid-js/dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { NotesProvider } from "./NotesContext";

render(() => (
  <NotesProvider>
    <App/>
  </NotesProvider>
), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
