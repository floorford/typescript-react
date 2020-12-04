import React from "react";
import ReactDOM from "react-dom";
import { Router, RouteComponentProps } from "@reach/router";

import { StoreProvider } from "./Store";

import App from "./App";
import "./css/style.css";

import FavouritePage from "./components/FavouritePage";
import RickMorty from "./components/RickMorty";
import Todo from "./components/Todo";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'>
        <RouterPage pageComponent={<FavouritePage />} path='/favourites' />
        <RouterPage pageComponent={<RickMorty />} path='/rickandmorty' />
        <RouterPage pageComponent={<Todo />} path='/todo' />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
