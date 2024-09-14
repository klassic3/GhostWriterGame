import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Game.css";
import fullheart from "./images/heart.png"

export default function Game(){

    const [randomWord, setWord] = useState(null)

    useEffect(() => {
        const fetchWord = async () => {
            const word = await fetch('/api/game')
            const json = await word.json()

            if (word.ok) {
                setWord(json)
            }
        }


        fetchWord()
    },[])


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

            <div className="randomWord">
                {randomWord && randomWord.map((word) =>(
                    <p key ={word._id}>{word.word}</p>
                ))}
            </div>

        </div>
    )
}