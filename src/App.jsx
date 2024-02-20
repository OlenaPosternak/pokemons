import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/shared/Footer";
import styled from "@emotion/styled";

function AppUnstyled({ className }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      style={{
        background: isHomePage ? "var(--background-color-yellow)" : "none",
      }}
    >
      <div
        className={className}
        style={{ opacity: 0, animation: "fadeIn 2s ease forwards" }}
      >
        <Header />
        <div className="app">
          <Outlet />
        </div>
        <Footer />
      </div>
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
