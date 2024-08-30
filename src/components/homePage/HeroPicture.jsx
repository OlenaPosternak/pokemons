import React from "react";
import Banner from "../../images/Banner.svg";
import Banner_mobile from "../../images/Banner_mobile.svg";
import styled from "@emotion/styled";

const images = {
  mobile: {
    src: Banner_mobile,
    width: 375,
  },

  pc: {
    src: Banner,
    width: 793,
  },
};

const HeroPictureUnstyled = ({ className }) => {
  const { mobile, pc } = images;

  return (
    <picture className={className} style={{ display: "block" }}>
      <source
        srcSet={`${mobile.src} ${mobile.width}w`}
        media={`(max-width: 900px)`}
      />
      <source srcSet={`${pc.src} ${pc.width}w`} media={`(min-width:901px)`} />

      <img src={pc.src} alt="illustration" style={{ width: "100%" }} />
    </picture>
  );
};

const styles = {
  width: "100%",
  maxWidth: "793px",
};

export const HeroPicture = styled(HeroPictureUnstyled)(() => styles);
