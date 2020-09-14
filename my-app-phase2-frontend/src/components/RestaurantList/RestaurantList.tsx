import React, { useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import SearchBar from "../SearchBar/SearchBar";
import RestaurantGrid from "../Grid/Grid";
import { IUserInput } from "../../common/Interfaces";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const RestaurantList = () => {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchName: null,
    Type: null,
  });

  function SetUserInput(a: IUserInput) {
    setUserInput(a);
  }

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)} />
        <RestaurantGrid
          SearchName={UserInput.SearchName}
          Type={UserInput.Type}
        />
      </MuiThemeProvider>
    </div>
  );
};

export default RestaurantList;
