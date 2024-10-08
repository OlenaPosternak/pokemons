import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./components/homePage/HomePage";
import { AllPokemonsPage } from "./components/pokemons/AllPokemonsPage";
import { PokemonsList } from "./components/pokemons/PokemonsList/PokemonsList";
import { PokemonsLoader } from "./components/pokemons/PokemonsList/PokemonsLoader";
import { OnePokemonSmall } from "./components/pokemons/OnePokemon/OnePokemonSmall";
import { OnePokemonLoader } from "./components/pokemons/OnePokemon/OnePokemonLoader";
import { HelmetProvider } from "react-helmet-async";
import { PokemonPage } from "./components/pokemonPage/PokemonPage";

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
        element: <AllPokemonsPage />,
        children: [
          {
            index: true,
            element: <PokemonsList />,
            loader: PokemonsLoader,
          },
          {
            path: "search",
            element: <OnePokemonSmall />,
            loader: OnePokemonLoader,
          },
        ],
      },
      {
        path: "allpokemons/:pokemonId",
        element: <PokemonPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
const helmetContext = {};

root.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
