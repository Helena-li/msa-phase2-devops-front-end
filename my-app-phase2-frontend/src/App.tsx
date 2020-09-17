import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import RestaurantList from "./components/RestaurantList/RestaurantList";

import ButtonAppBar from "./components/Layout/BasicLayout";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { green, orange } from "@material-ui/core/colors";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import SearchBar from "./components/SearchBar/SearchBar";
import RestaurantDetail from "./components/Detail/Detail";

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div>
        <ThemeProvider theme={theme}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                <Link to="/">Home</Link>
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route exact path="/">
              <RestaurantList />
            </Route>
            <Route path="/detail/:id">
              <RestaurantDetail />
            </Route>
          </Switch>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
