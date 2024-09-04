import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "../styles/Game.css";
import fullheart from "./images/heart.png"

export default function Game(){

    const inputRef2 = useRef(null)
    return(
        <div className="container ">
            <div className="imgcontainer">
                <img src={fullheart } alt="fullheart"></img>
                <img src={fullheart } alt="fullheart"></img>
                <img src={fullheart } alt="fullheart"></img>
            </div>
            
            <form id="form">
                <input ref={inputRef2} type="text" className="brutalist-input smooth-type " placeholder="Enter word here..."/>
            </form>
        </div>
    )
}