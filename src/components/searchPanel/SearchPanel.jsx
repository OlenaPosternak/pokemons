import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

export const SearchPanel = ({ className, searchValue, setSearchValue }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let params = new URLSearchParams(document.location.search);
    let name = params.get("searchValue");
    setInputValue(name || "");
  }, [setInputValue]);

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
      <Box
        component="form"
        sx={{
          width: "100%",
          margin: "20px auto",
          maxWidth: 800,
        }}
      >
        <Input
          endAdornment={
            <IconButton className="icon">
              {!searchValue ? (
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
          sx={{
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
          }}
        />
      </Box>
    </div>
  );
};
