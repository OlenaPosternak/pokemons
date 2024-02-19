import { useLoaderData, useOutletContext } from "react-router-dom";
import { PokemonCard } from "../../pokemonCard/PokemonCard";

import styled from "@emotion/styled";

const PokemonsListUnstyled = ({ className }) => {
  const { pokemonList, totalNumberOfPokemons } = useLoaderData();
  const setTotalPokemons = useOutletContext();
  setTotalPokemons(totalNumberOfPokemons);

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
};

export const PokemonsList = styled(PokemonsListUnstyled)(styles);
