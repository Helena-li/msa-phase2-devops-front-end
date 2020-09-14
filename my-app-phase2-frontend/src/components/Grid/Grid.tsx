import React, { useState, useEffect } from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { getArray } from "../../api/Api";
import MediaCard from "../MediaCardComponent/MediaCard";
import { IRestaurantState } from "../../common/Interfaces";

interface IGridProps {
  SearchName: string | null;
  Type: string | null;
}

const RestaurantGrid = (props: IGridProps) => {
  const [restaurantArray, setRestaurantArray] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (restaurantArray.length > 0 && isLoading) setIsLoading(false);
  }, [isLoading, restaurantArray]);

  const makeArrayRequest = async () => {
    setRestaurantArray(await getArray());
  };

  useEffect(() => {
    makeArrayRequest();
  }, [props.SearchName, props.Type]);

  const Cards: JSX.Element[] = [];
  restaurantArray.forEach((el: IRestaurantState, i: Number) => {
    console.log(el);
    if (!el || !el.id || !el.name) {
      return;
    }
    Cards.push(
      <Grid
        key={"card_" + i}
        item
        sm={6}
        md={4}
        lg={3}
        className="MediaGridCard"
      >
        <MediaCard
          id={el.id}
          name={el.name}
          address={el.address}
          mapLink={el.mapLink}
          pictureLink={el.pictureLink}
          rate={el.rate}
        />
      </Grid>
    );
  });

  return isLoading ? (
    <CircularProgress />
  ) : (
    <div>
      <Grid container spacing={3} className="MediaGridContainer">
        {Cards}
      </Grid>
    </div>
  );
};

export default RestaurantGrid;
