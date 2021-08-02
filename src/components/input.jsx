import React, { useState } from "react";

function input(props){
    return(
    <div>
        <input placeholder="city..." onChange={props.onChange}/>
        <button type="submit" onClick={props.onClick}>submit </button>
    </div>
    );
}

export default input;