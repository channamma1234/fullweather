import React, { useState } from "react";
import axios from "axios";
import Input from "./input";
import Detail from "./detail";

function App(){

const api_key="4e9ab49d3ffa88d7e1f6dee702b3cd4e";
const[state, setState]=useState({
      term: "",
      city_name: "",
      temp: "",
      humidity: "",
      wind: "",
      weather_status: "",
      weather_desc: "",
      weather_icon: "",
      lat:"",
      lon:""
});
function handleChange(e){
    setState({
      term: e.target.value
    });
  };

 function handleClick(){
    axios
      .post(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          state.term +
          "&units=metric&appid=" +
          api_key
      )
      .then(res => {
        setState({
          lat:res.data.coord.lat,
          lon:res.data.coord.lon,
          city_name: res.data.name,
          temp: res.data.main.temp,
          humidity: res.data.main.humidity,
          wind: res.data.wind.speed,
          weather_status: res.data.weather[0].main,
          weather_desc: res.data.weather[0].description,
          weather_icon: res.data.weather[0].icon
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
console.log(lat);
    return(
<div>
    <h1>Simple Weather App</h1>
    <Input onChange={handleChange} onClick={handleClick} />
    <Detail data={state} />
</div>
    );

}

export default App;