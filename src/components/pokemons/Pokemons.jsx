import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { PokemonCard } from "../pokemonCard/PokemonCard";
import { ScrollToTopButton } from "../shared/ScrollToTopButton";
import styled from "@emotion/styled";
import { PaginationSection } from "./PaginationSection";
import { SearchPanel } from "../searchPanel/SearchPanel";

const DEFAULT_OFFSET = 0;

export const AllPokemonsUnstyled = ({ className }) => {
  const [offset, setOffset] = useState(DEFAULT_OFFSET);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [offset]);

  const { totalNumberOfPokemons, pokemonList } = useLoaderData();

  return (
    <section className={className}>
      <h2 style={{ textAlign: "center", margin: " 20px 0" }}>
        {totalNumberOfPokemons} Pokemons for you to find your favorite{" "}
      </h2>
      <SearchPanel searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="pokemonsList">
        {pokemonList.map((pokeData) => (
          <PokemonCard pokemonInfo={pokeData} key={pokeData.id} />
        ))}
      </div>
      <PaginationSection
        quantityOfPokemons={pokemonList.length}
        setOffset={setOffset}
        offset={offset}
        DEFAULT_OFFSET={DEFAULT_OFFSET}
      />
      <ScrollToTopButton />
    </section>
  );
};

const styles = {
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

export const Pokemons = styled(AllPokemonsUnstyled)(styles);
