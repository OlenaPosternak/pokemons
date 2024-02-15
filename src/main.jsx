import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./components/homePage/HomePage";

import { Pokemons } from "./components/pokemons/Pokemons";
import { PokemonsLoader } from "./components/pokemons/PokemonsLoader";

const router = createBrowserRouter([
  {
    basename: "",
  },
  {
    path: "",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "allpokemons",
        element: <Pokemons />,
        loader: PokemonsLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
