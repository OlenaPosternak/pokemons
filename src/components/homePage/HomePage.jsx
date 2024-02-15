import styled from "@emotion/styled";
import { HomeInfo } from "./HomeInfo";
import { HeroPicture } from "./HeroPicture";

export const HomePageUnstyled = ({ className }) => {
  return (
    <section className={className}>
      <HomeInfo />
      <div className="heroWrapper">
        <HeroPicture />
      </div>
    </section>
  );
};

const styles = {
  display: "flex",
  padding: "60px 0 30px 0",

  "@media screen and (max-width: 600px)": {
    flexDirection: "column-reverse",
    padding: "20px 0 ",
  },
  ".heroWrapper": {
    position: "absolute",
    right: 0,
    "@media screen and (max-width: 900px)": {
      position: "static",
      marginRight: 0,
    },
  },
};

export const HomePage = styled(HomePageUnstyled)(() => styles);
