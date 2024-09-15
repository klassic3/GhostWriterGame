import React, { useEffect, useRef, useState } from "react";

import "../styles/Game.css";
import floor from "./images/flor.png";
import guy from "./images/guy.png";
import ghost from "./images/ghost.png";

import { useGameContext } from "../hooks/useGameContext";

//components
import Lives from '../components/Lives'

export default function Game(){

    const {lives, dispatch} = useGameContext()
    
    var life = lives;

    const [randomWord, setWord] = useState(null)

    useEffect(() => {
        const fetchWord = async () => {
            const word = await fetch('/api/game')
            const json = await word.json()

            if (word.ok) {
                setWord(json)
            }
        }
        dispatch({type: 'SET_LIVES', payload: 3})

        fetchWord()
    },[])


    const handleSubmit = async (e) =>{
        e.preventDefault();
        life -= 1; 
        dispatch({type: 'EDIT_LIVES', payload: life})
        console.log(lives);
    }

    const inputRef2 = useRef(null)
    return(
       <div>
         <div className="container ">
            <Lives life={lives}/>
            <form id="form" onSubmit={handleSubmit}>
                <input ref={inputRef2} type="text" className="brutalist-input smooth-type " placeholder="Enter word here..."  />
            </form>

            <div className="randomWord">
                {randomWord && randomWord.map((word) =>(
                    <p key ={word._id}>{word.word}</p>
                ))}
            </div>
        </div>
         
         
        <div className="player">
                <img src={guy } alt="floor" className="guy"></img>
            </div>
            <div className="floor">
                <img src={floor } alt="floor" className="floorimg"></img>
            </div>
       </div>
    )
}
