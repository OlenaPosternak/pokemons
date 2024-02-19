import { useState, useEffect, Suspense } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { ScrollToTopButton } from "../shared/ScrollToTopButton";
import { PaginationSection } from "./PaginationSection";
import { SearchPanel } from "../searchPanel/SearchPanel";
import { SkeletonOneCard } from "../shared/SkeletonOneCard";
import styled from "@emotion/styled";

const DEFAULT_OFFSET = 0;

export const AllPokemonsPageUnstyled = ({ className }) => {
  const navigation = useNavigation();
  const [offset, setOffset] = useState(DEFAULT_OFFSET);
  const [totalPokemons, setTotalPokemons] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [offset]);

  return (
    <section className={className}>
      <h2>{totalPokemons} Pokemons for you to find your favorite</h2>
      <SearchPanel />

      {navigation.state === "loading" ? (
        <SkeletonOneCard />
      ) : (
        <Outlet context={setTotalPokemons} />
      )}

      <PaginationSection
        quantityOfPokemons={totalPokemons}
        setOffset={setOffset}
        offset={offset}
        DEFAULT_OFFSET={DEFAULT_OFFSET}
      />
      <ScrollToTopButton />
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

export const AllPokemonsPage = styled(AllPokemonsPageUnstyled)(styles);
