import styled from "@emotion/styled";
import { MainButton } from "../shared/MainButton";

export const HomeInfoUnstyled = ({ className }) => {
  return (
    <div className={className}>
      <h1>
        <span>Find</span> all your favorite <span>Pokemon</span>
      </h1>
      <p className="text">
        You can know the type of Pokemon, its strengths, disadvantages and
        abilities
      </p>
      <MainButton title="See pokemons" color="#73D677" hoverColor="#7bc97e" />
    </div>
  );
};

const styles = {
  paddingTop: "140px",
  maxWidth: "506px",
  display: "flex",
  flexDirection: "column",
  gap: "64px",

  "@media screen and (max-width: 600px)": {
    paddingTop: "5px",
    alignItems: "center",
    maxWidth: "none",
  },

  h1: {
    fontSize: "72px",
    fontWeight: 400,
    letterSpacing: "4px",

    "@media screen and (max-width: 600px)": {
      fontSize: "42px",
      textAlign: "center",
    },
    "& span": {
      fontWeight: 700,
    },
  },

  ".text": {
    fontSize: "32px",
    maxWidth: "515px",

    "@media screen and (max-width: 600px)": {
      textAlign: "center",
      fontSize: "24px",
      marginTop: "-60px",
    },
  },
};

export const HomeInfo = styled(HomeInfoUnstyled)(() => styles);
