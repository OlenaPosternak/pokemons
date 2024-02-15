import { Link } from "react-router-dom";
import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const MainButtonUnstyled = ({ title, className }) => {
  return (
    <Button className={className}>
      <Link to="allpokemons">{title}</Link>
    </Button>
  );
};

const styles = ({ color, hoverColor }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "17px 0 22px",
  width: "231px",
  height: "66px",
  backgroundColor: color,
  boxShadow: "0px -9px 0px 0px rgba(0, 0, 0, 0.18) inset",
  borderRadius: "11px",
  fontSize: "23px",
  fontWeight: 700,
  textTransform: "none",
  color: "var(--color-black)",

  "&:hover": {
    backgroundColor: hoverColor,
  },

  "@media screen and (max-width: 600px)": {
    width: "312px",
    height: "55px",
    padding: "12px 0 16px",
  },
});

export const MainButton = styled(MainButtonUnstyled)(styles);
