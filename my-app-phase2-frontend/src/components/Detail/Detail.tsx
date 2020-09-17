import React, { useState } from "react";
import { Form, Input, Radio, Select, TextArea } from "semantic-ui-react";
import { MuiThemeProvider, createMuiTheme, Button } from "@material-ui/core";
import { postArray } from "../../api/Api";
import { IRestaurantState } from "../../common/Interfaces";

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

const RestaurantDetail = () => {
  const [UserInput, setUserInput] = useState<IRestaurantState>({
    id: null,
    name: null,
    address: null,
    mapLink: null,
    pictureLink: null,
    rate: null,
  });
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mapLink: "",
    pictureLink: "",
    rate: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "rate") {
      console.log(+e.target.value);
      setFormData({ ...formData, rate: +e.target.value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  //   function SetUserInput(a: IUserInput) {
  //     setUserInput(a);
  //   }

  const handleSubmit = () => {
    const data1 = {
      name: "Bob",
      address: "Albany",
      mapLink: "http://google.com",
      pictureLink: "http://google.com",
      rate: 4,
    };
    console.log(formData);

    postArray(formData);
  };

  // const handleChange = (e: any, data: any) => {
  //   // console.log(e);
  //   const { name, value } = data;
  //   // console.log(data);
  //   setUserInput({ ...UserInput, [name]: value });
  // };

  return (
    <div>
      <div>
        <h3>Detail</h3>
        <h3>Please select a topic.</h3>
        <h3>Please select a topic.</h3>
        <h3>Please select a topic.</h3>
        <h3>Please select a topic.</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <Form.Input
              placeholder="address"
              name="address"
              onChange={handleChange}
            />
            <Form.Input
              placeholder="mapLink"
              name="mapLink"
              onChange={handleChange}
            />
            <Form.Input
              placeholder="pictureLink"
              name="pictureLink"
              onChange={handleChange}
            />
            <Form.Input
              placeholder="rate"
              name="rate"
              onChange={handleChange}
            />
            <Form.Button type="submit" content="Submit" />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default RestaurantDetail;
