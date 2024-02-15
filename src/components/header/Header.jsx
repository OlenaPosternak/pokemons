import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../../images/Logo.svg";
import { NavBarDesktop } from "./NavBarDesktop";
import { NavBarMobile } from "./NavBarMobile";

export const Header = (props, { className }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <div className={className}>
      <Box>
        <AppBarUnstyled component="nav">
          <Toolbar className="toolBar">
            <Link to="/pokedex">
              <img src={Logo} alt="pokemon" />
            </Link>
            <IconButton
              aria-label="open drawer"
              className="menuIcon"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <NavBarDesktop />
          </Toolbar>
        </AppBarUnstyled>
        <NavBarMobile
          props={props}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Box>
    </div>
  );
};

const AppBarUnstyled = styled(AppBar)`
  background: var(--color-third);
  boxshadow: 0px 4px 16px 0px rgba(1, 28, 64, 0.2);
  display: flex;
  gap: 50px;
  .toolBar {
    display: flex;
    justify-content: space-between;
    padding: 14px 150px;
    @media screen and (max-width: 600px) {
      padding: 16px;
    }
  }
  .menuIcon {
    color: var(--color-black);
    @media screen and (min-width: 600px) {
      display: none;
    }
  }
`;
