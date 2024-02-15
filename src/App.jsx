import { Outlet, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { Header } from "./components/header/Header";
import { Footer } from "./components/shared/Footer";
import React from "react";

function AppUnstyled({ className }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      className={className}
      style={{
        background: isHomePage ? "var(--background-color-yellow)" : "none",
      }}
    >
      <Header />
      <div className="app">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

const styles = () => ({
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  minHeight: "100vh",
  padding: "0 156px  30px ",

  "@media screen and (max-width: 1280px)": {
    padding: "0 30px  15px ",
  },

  "@media screen and (max-width: 600px)": {
    padding: "30px 5px 16px",
  },

  ".app": {
    flex: 1,
    marginTop: "95px",
  },
});

export const App = styled(AppUnstyled)(styles);
