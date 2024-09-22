import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "../styles/Root.css"
import "../styles/Gameover.css"

import trophy from "./images/trofy.png"


import { useScoreContext } from "../hooks/useScoreContext";

export default function GameOver(){
    const {scores, dispatchs} = useScoreContext()

    return(
        <div className="container">
            <h1 className="title text-light">GameOver</h1>
            <h1 className="title text-light">Your Score was {scores}</h1>
            <div class="e-card playing">
            
  
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>

            <div class="infotop">
            <img src={trophy } alt="champion" class="icon"></img>
            <br/>      
                Klassic
                <br/>
                <div class="name">1700</div> 
            </div>
            

            </div>
            
        </div>
    )
}