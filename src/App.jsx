import { Outlet, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { Header } from "./components/header/Header";
import { Footer } from "./components/shared/Footer";
import { useEffect, useState } from "react";
import { PreloadingPage } from "./components/shared/PreloadingPage";

function AppUnstyled({ className }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div
      style={{
        background: isHomePage ? "var(--background-color-yellow)" : "none",
      }}
    >
      {loading ? (
        <PreloadingPage />
      ) : (
        <div
          className={className}
          style={
            !loading ? { opacity: 0, animation: "fadeIn 2s ease forwards" } : ""
          }
        >
          <Header />
          <div className="app">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
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
