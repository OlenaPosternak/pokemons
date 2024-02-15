import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";

export const SearchPanelUnstyled = ({ className, setSearchValue }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("searchValue");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(name || "");
  }, [name]);

  const onSearchClick = (e) => {
    e.preventDefault();
    setSearchValue(inputValue);
    navigate(`?searchValue=${inputValue}`);
  };

  const onClearClick = () => {
    setSearchValue("");
    setInputValue("");
    navigate(`/allpokemons`);
  };

  return (
    <div className={className}>
      <Box component="form" className="form" sx={{}}>
        <Input
          className="searchInput"
          endAdornment={
            <IconButton className="icon">
              {!name ? (
                <SearchIcon onClick={onSearchClick} />
              ) : (
                <ClearIcon onClick={onClearClick} />
              )}
            </IconButton>
          }
          disableUnderline={true}
          autoComplete="off"
          autoFocus={false}
          fullWidth
          name="searchValue"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onSearchClick(e);
            }
          }}
          placeholder="Find a pokemon by name"
        />
      </Box>
    </div>
  );
};

const styles = {
  ".form": {
    width: "100%",
    margin: "20px auto",
    maxWidth: 800,
  },
  ".searchInput": {
    input: {
      position: "relative",
      background: "#fff",
      border: "1px solid rgba(217, 217, 217, 0.5)",
      borderBottomColor: "rgba(217, 217, 217, 0.3)",
      borderRadius: "8px",
      color: "#000",
      padding: "10px 20px",
      width: "100%",
      "@media only screen and (max-width: 480px)": {
        paddingRight: "50px",
      },
    },
    "& .icon": {
      position: "absolute",
      right: "8px",
      top: "50%",
      transform: "translateY(-50%)",
    },

    "input::placeholder": {
      color: "black",
    },
  },
};

export const SearchPanel = styled(SearchPanelUnstyled)(styles);
