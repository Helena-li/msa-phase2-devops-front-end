import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { IUserInput } from "../../common/Interfaces";

interface ISearchBarProps {
  SetUserInput: (a: IUserInput) => void;
}

const SearchBar = (props: ISearchBarProps) => {
  return <div>search</div>;
};

export default SearchBar;
