import Button from "@mui/material/Button";
import styled from "@emotion/styled";

export const ButtonForPaginationUnstyled = ({
  className,
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <Button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

const styles = {
  display: "flex",
  justifyContent: "center",
  width: "120px",
  padding: "5px ",
  boxShadow: "0px -3px 0px 0px rgba(0, 0, 0, 0.18) inset",
  borderRadius: "11px",
  fontSize: "12px",
  fontWeight: 500,
  textTransform: "none",
  color: "var(--color-black)",
  backgroundColor: "var(--color-lightGreenGrey)",
  border: "1px solid var(--color-darkgrey)",

  "&:hover": {
    backgroundColor: "var(--color-darkGreenGrey)",
  },

  "@media screen and (max-width: 600px)": {
    width: "100px",
  },
};

export const ButtonForPagination = styled(ButtonForPaginationUnstyled)(styles);
