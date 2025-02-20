import React, { useRef } from "react";
import { Link } from "react-router-dom";




import trophy from "/images/trofy.png"


import { useScoreContext } from "../hooks/useScoreContext.js";
import { useScore } from "../hooks/useScore.js";



export default function GameOver(){
    const {scores} = useScoreContext()
    const {update, error, isLoading} = useScore()
    const endGame = async() =>{
        await update()
    
    }
    return(
        <div className="container">
            <h1 className="title text-light">Game Over</h1>
            <div className="deadimage"> </div>

            <div className="e-card playing">
            
  
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="infotop">
            <img src={trophy } alt="champion" className="icon"></img>
            <br/>      
                Klassic
                <br/>
                <div className="name">1700</div> 
            </div>
            

            </div>
            
        </div>
    )
}