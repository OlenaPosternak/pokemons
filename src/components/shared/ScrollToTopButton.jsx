import { useEffect, useState } from "react";
import ScrollArrow from "../../images/ScrollArrow.svg";
import styled from "@emotion/styled";

const ScrollToTopButtonUnstyled = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setIsVisible(true);
      } else if (scrolled <= 300) {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={className}>
      {isVisible && (
        <button onClick={scrollToTop}>
          <img src={ScrollArrow} alt="scroll to top" />
        </button>
      )}
    </div>
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "9px",
    right: 20,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "44px",
    height: "44px",
    padding: 0,

    backgroundColor: "transparent",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
  },
};
export const ScrollToTopButton = styled(ScrollToTopButtonUnstyled)(styles);
