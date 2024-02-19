import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";

export const SearchPanelUnstyled = ({ className }) => {
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
    if (inputValue) {
      navigate(`search/?searchValue=${inputValue}`);
    }
  };

  const onClearClick = () => {
    setInputValue("");
    navigate(`/allpokemons`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearchClick(e);
    }
  };

  return (
    <div className={className}>
      <Box component="form" className="form">
        <Input
          className="searchInput"
          endAdornment={
            <IconButton
              className="icon"
              onClick={!name ? onSearchClick : onClearClick}
            >
              {!name ? <SearchIcon /> : <ClearIcon />}
            </IconButton>
          }
          disableUnderline={true}
          autoComplete="off"
          autoFocus={false}
          fullWidth
          name="searchValue"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value.trim())}
          onKeyDown={handleKeyDown}
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
      background: "var(--color-white)",
      border: "1px solid var(--color-border)",
      borderRadius: "8px",
      color: "var(--color-black)",
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
      color: "var(--color-black)",
    },
  },
};

export const SearchPanel = styled(SearchPanelUnstyled)(styles);
