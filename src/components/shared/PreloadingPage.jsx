import StartImg from "../../images/NoPokemon1.png";
import styled from "@emotion/styled";

const PreloadingPageUnstyled = ({ className }) => {
  return (
    <div className={className}>
      <img src={StartImg} alt="three pokemons" className="startImg" />

      <div className="container">
        <div className="progress">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  opacity: 1,
  transition: "opacity 1s ease",

  img: {
    opacity: 0,
    animation: "fadeIn 1s ease forwards",
  },

  ".container": {
    margin: "100px auto",
    width: "500px",
    textAlign: "center",
    "@media screen and (max-width: 900px)": {
      margin: "50px auto",
      width: "300px",
    },
  },

  ".progress": {
    padding: "6px",
    background: "rgba(0, 0, 0, 0.25)",
    borderRadius: "6px",
    boxShadow:
      "inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08)",
    backgroundColor: "var(--color-ornage-light)",
    width: "100%",
  },
  ".progress-bar": {
    height: "18px",
    backgroundColor: "var(--color-orange)",
    borderRadius: "4px",
    transition: "width 0.4s linear, background-color 0.4s linear",
    backgroundImage:
      "linear-gradient(45deg, rgb(252,163,17) 25%, transparent 25%, transparent 50%, rgb(252,163,17) 50%, rgb(252,163,17) 75%, transparent 75%, transparent)",
    width: "100%",
    animation: "progressAnimationStrike 2s",
  },

  "@keyframes progressAnimationStrike": {
    from: { width: 0 },
    to: { width: "100%" },
  },
};

export const PreloadingPage = styled(PreloadingPageUnstyled)(styles);
