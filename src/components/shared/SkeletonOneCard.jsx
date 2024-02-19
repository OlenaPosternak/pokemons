import styled from "@emotion/styled";
import Skeleton from "@mui/material/Skeleton";

const SkeletonOneCardUnstyled = ({ className }) => {
  return (
    <Skeleton
      className={className}
      variant="rounded"
      animation="wave"
      width={500}
      height={300}
    />
  );
};

const styles = {
  boxShadow: "var(--card-shadow)",
  borderRadius: "10px",
};

export const SkeletonOneCard = styled(SkeletonOneCardUnstyled)(styles);
