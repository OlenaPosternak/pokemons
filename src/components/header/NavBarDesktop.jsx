import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

const NavBarUnstyled = ({ className }) => {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <nav className={`${className}`}>
      <Link
        to="/pokedex"
        className={`link ${currentPage === "/" ? "active" : ""}`}
      >
        Home
      </Link>
      <Link
        to="allpokemons"
        className={`link ${currentPage === "allpokemons" ? "active" : ""}`}
      >
        Pokemons
      </Link>
    </nav>
  );
};

const styles = {
  fontSize: "25px",
  color: "var(--color-pharagraph)",
  gap: "5vw",
  display: "flex",
  "@media screen and (max-width: 600px)": {
    display: "none",
  },

  ".link": {
    position: "relative",
    color: "var(--color-black)",
    textDecoration: "none",
    display: "flex",

    "&.active::after": {
      content: '" "',
      position: "absolute",
      bottom: "-16px",
      width: "100%",
      height: "3px",
      borderRadius: "3px",
      background: "var(--color-pharagraph)",
    },
  },
  ".navbar": { flexDirection: "row", gap: "5vw" },
};

export const NavBarDesktop = styled(NavBarUnstyled)(() => styles);
