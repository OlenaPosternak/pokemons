import { ButtonForPagination } from "./ButtonForPagination";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import styled from "@emotion/styled";

const POKEMONS_PER_PAGE = 20;

export const PaginationSectionUnstyled = ({
  offset,
  setOffset,
  quantityOfPokemons,
  DEFAULT_OFFSET,
  className,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const offsetParam =
      parseInt(searchParams.get("offset"), 10) || DEFAULT_OFFSET;
    setOffset(offsetParam);
  }, [location.search]);

  const handleNextPage = () => {
    const newOffset = offset + POKEMONS_PER_PAGE;
    navigate(`../allpokemons?offset=${newOffset}`);
  };

  const handlePrevPage = () => {
    if (offset >= POKEMONS_PER_PAGE) {
      const newOffset = offset - POKEMONS_PER_PAGE;
      navigate(`../allpokemons?offset=${newOffset}`);
    }
  };

  const handleHome = () => {
    setOffset(DEFAULT_OFFSET);
    navigate(`../allpokemons?offset=0`);
  };
  return (
    <div className={className}>
      <ButtonForPagination onClick={handleHome}>Home</ButtonForPagination>{" "}
      {quantityOfPokemons >= POKEMONS_PER_PAGE ? (
        <>
          <ButtonForPagination
            onClick={handlePrevPage}
            disabled={offset === DEFAULT_OFFSET}
          >
            Previous
          </ButtonForPagination>
          <ButtonForPagination onClick={handleNextPage}>
            Next
          </ButtonForPagination>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

const styles = {
  display: "flex",
  margin: "20px auto",
  justifyContent: "center",
  gap: "15px",
};

export const PaginationSection = styled(PaginationSectionUnstyled)(styles);
