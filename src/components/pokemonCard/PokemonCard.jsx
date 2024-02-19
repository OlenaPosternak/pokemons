import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { toCapitalizedFirstLetter } from "../../helpers/capitalizedFirstLetter";
import { getPokemonImageByName } from "../../helpers/getPokemonImageByName";
import styled from "@emotion/styled";
import { useRandomColorHook } from "../../hooks/useRandomColorHook";

export const PokemonCardUnstyled = ({ className, pokemonInfo }) => {
  const randomBackground = useRandomColorHook();

  return (
    <Card className={className}>
      <CardActionArea className="cardActionArea">
        <CardMedia
          className="pokemonImg"
          component="img"
          image={getPokemonImageByName(pokemonInfo.name)}
          alt="picture of pokemon"
        />
        <CardContent
          className="cardContent"
          sx={{ background: randomBackground }}
        >
          <Typography>{toCapitalizedFirstLetter(pokemonInfo.name)}</Typography>
          <div>
            <Typography className="pokemonWeight">
              {pokemonInfo.weight}
            </Typography>
            <Typography className="weightSize">Weight</Typography>
          </div>
          <ul className="typeInfo">
            {pokemonInfo.types.map((type) => (
              <li key={type.type.name} className="typeItem">
                {toCapitalizedFirstLetter(type.type.name)}
              </li>
            ))}
          </ul>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const styles = {
  boxShadow: "var(--card-shadow)",
  borderRadius: "10px",
  margin: "0 auto",
  width: "100%",
  maxWidth: "500px",
  maxHeight: "300px",

  "@media screen and (max-width: 900px)": {
    maxWidth: "400px",
    maxHeight: "250px",
  },

  ".cardActionArea": {
    display: "flex",
    flexDirection: "row-reverse",
  },

  ".pokemonImg": {
    maxWidth: 270,
    aspectRatio: "1/1",
    margin: "0 auto",

    "@media screen and (max-width: 900px)": {
      maxWidth: 230,
    },
  },

  ".cardContent": {
    width: "150px",
    height: "270px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    "&>p": { fontSize: "18px" },
  },

  ".pokemonWeight": {
    width: 45,
    height: 45,
    border: "3px solid var(--color-black)",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  ".weightSize": {
    marginTop: 5,
    fontSize: "14px",
  },
  ".typeInfo": {
    display: "flex",
    gap: "10px",
    flexDirection: "column",
  },

  ".typeItem": {
    borderRadius: "11px",
    background: "var(--color-green)",
    boxShadow: "0px -2px 0px 0px rgba(0, 0, 0, 0.18) inset",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "74px",
    height: "18px",
    color: "var(--color-pharagraph)",
    fontSize: "12px",
  },
  ".typeItem:nth-of-type(2n)": {
    background: "var(--color-blue)",
  },
};
export const PokemonCard = styled(PokemonCardUnstyled)(styles);
