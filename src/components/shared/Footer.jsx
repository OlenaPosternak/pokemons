import styled from "@emotion/styled";
const linkedinProfile = "https://www.linkedin.com/in/posternak-olena/";

export const FooterUnstyled = ({ className }) => {
  return (
    <footer className={className}>
      <p>Make with ❤️ for the PokéSpartans team Platzi Master</p>
      <a href={linkedinProfile} target="_blank">
        Contacts
      </a>
    </footer>
  );
};

const styles = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "18px",
  fontWeight: 700,
  textAlign: "center",

  "@media screen and (max-width: 600px)": {
    flexDirection: "column-reverse",
    fontSize: "16px",
    "& p": {
      fontWeight: 400,
    },
  },
};

export const Footer = styled(FooterUnstyled)(() => styles);
