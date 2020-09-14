import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={RestaurantList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
