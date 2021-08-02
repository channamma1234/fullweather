import React from "react";

function detail(props){
    return(
<div>
    <h1> {props.data.city_name} </h1>
      <h3> {props.data.weather_status} </h3>
      <p> {props.data.weather_desc} </p>

      <ul>
        <li>
          Temp : <span> {props.data.temp}° </span>
        </li>
        <li>
          Humidity : <span>{props.data.humidity}%</span>
        </li>
        <li>
          Wind : <span>{props.data.wind}km/s</span>
        </li>    
        <img src={`https://openweathermap.org/img/wn/${props.data.weather_icon}@2x.png`}/>
      </ul>
</div>
    );
}

export default detail;