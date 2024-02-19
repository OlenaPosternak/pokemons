import { useLoaderData } from "react-router-dom";
import { PokemonCard } from "../../pokemonCard/PokemonCard";
import { NoPokemons } from "./NoPokemons";
import styled from "@emotion/styled";

export const OnePokemonSmallUnstyled = ({ className }) => {
  const { pokeData, isPokemonExist } = useLoaderData();

  return (
    <section className={className}>
      {isPokemonExist ? (
        <div className="pokemonsList">
          <PokemonCard pokemonInfo={pokeData} key={pokeData.id} />
        </div>
      ) : (
        <NoPokemons />
      )}
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

export const OnePokemonSmall = styled(OnePokemonSmallUnstyled)(styles);
