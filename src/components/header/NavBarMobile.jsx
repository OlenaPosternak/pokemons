import { Link, useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Logo from "../../images/Logo.svg";
import styled from "@emotion/styled";

export const NavBarMobileUnstyled = ({
  props,
  mobileOpen,
  handleDrawerToggle,
  className,
}) => {
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <Drawer
      className={className}
      anchor="top"
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <Box onClick={handleDrawerToggle} className="wrapper">
        <Link to="/pokedex">
          <img src={Logo} alt="pokemon" />
        </Link>
        <List className="list">
          <Link
            to="/pokedex"
            className={`link ${currentPage === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="allpokemons"
            className={`link ${currentPage === "/" ? "active" : ""}`}
          >
            Pokemons
          </Link>
        </List>
      </Box>
    </Drawer>
  );
};

const styles = {
  ".MuiDrawer-paper": {
    padding: "37px 0 44px",
    background:
      "var(--yellowGradient, linear-gradient(180deg, #f5db13 0%, #f2b807 100%))",
    width: "100%",
    height: "fit-content",
    boxShadow: "4px 4px 24px 0px rgba(1, 17, 38, 0.2)",
    borderRadius: "0px 0px 16px 16px",
  },
  ".list": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    fontSize: "27px",
    textShadow: "4px 4px 20px rgba(1, 28, 64, 0.2)",
  },
  ".wrapper": {
    textAlign: "center",
  },
};

export const NavBarMobile = styled(NavBarMobileUnstyled)(() => styles);
