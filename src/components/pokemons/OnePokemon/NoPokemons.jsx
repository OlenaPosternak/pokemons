import { Typography } from "@mui/material";
import NoPokemonsImg from "../../../images/NoPokemon.png";
import styled from "@emotion/styled";

const NoPokemonsUnstyled = ({ className }) => {
  return (
    <div className={className}>
      <Typography>
        There is no Pokemon with such name. Please try another one or check the
        full list of Pokemons.
      </Typography>
      <img src={NoPokemonsImg} alt="picture of 3 pokemons" />
    </div>
  );
};

const styles = {
  display: "flex",
  flexDirection: "column",
  gap: "5%",
  alignItems: "center",
  p: {
    textAlign: "center",
  },
};

export const NoPokemons = styled(NoPokemonsUnstyled)(styles);
