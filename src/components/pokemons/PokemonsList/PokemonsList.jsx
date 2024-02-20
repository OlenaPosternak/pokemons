import { useLoaderData, useOutletContext } from "react-router-dom";
import { PokemonCard } from "../../pokemonCard/PokemonCard";

import styled from "@emotion/styled";
import { useEffect } from "react";

const PokemonsListUnstyled = ({ className }) => {
  const { pokemonList, totalNumberOfPokemons } = useLoaderData();
  const setTotalPokemons = useOutletContext();

  useEffect(() => {
    setTotalPokemons(totalNumberOfPokemons);
  }, []);
  return (
    <section className={className}>
      <div className="pokemonsList">
        {pokemonList?.map((pokeData) => (
          <PokemonCard pokemonInfo={pokeData} key={pokeData.id} />
        ))}
      </div>
    </section>
  );
};

const styles = {
  h2: {
    textAlign: "center",
    margin: " 20px 0",
  },
  ".pokemonsList": {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    margin: "0 auto",
    "@media screen and (max-width: 750px)": {
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },

  "@keyframes fadeIn": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
};

export const PokemonsList = styled(PokemonsListUnstyled)(styles);
