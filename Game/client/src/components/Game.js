import React, { useEffect, useRef, useState } from "react";


import "../styles/Game.css";


import { useScoreContext } from "../hooks/useScoreContext";
import { useGameContext } from "../hooks/useGameContext";
import { useWordContext } from "../hooks/useWordContext";

import { reset_animation, life } from "./Scene";

//components
import Lives from '../components/Lives'
import Scene from "./Scene";


var score = null;
export default function Game(){


    const {lifes, dispatch} = useGameContext()
    const {scores, dispatchs} = useScoreContext()
    score = scores;

    const {word, dispatchw} = useWordContext()

    var r_word = null;

    word && word.map((randomword) =>(
        r_word=randomword.word
    ))

    var i =1;

    const fetchWord = async () => {
    const word = await fetch('/api/game')
    const json = await word.json()
    
    if (word.ok && i === 1) {
        dispatchw({type: 'SET_WORD', payload: json })
        i++
        }
    i=1
    }
    useEffect(() => {
        dispatch({type: 'SET_LIVES', payload: 3})
        dispatchs({type: 'SET_SCORE', payload: 0})

        fetchWord()
    },[])

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (inputRef2.current.value === r_word)
        {
            reset_animation()
            fetchWord()
            score +=1
            dispatchs({type: 'EDIT_SCORE', payload: score})
        }


        setInputValue("")
    }

   

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };


      
    const inputRef2 = useRef(null)
    return(
       <div>
         <div className="container ">


            <Lives life={life}/> <div className="Score"><p>{score}</p></div>

            
            <form id="form" onSubmit={handleSubmit}>
                <input ref={inputRef2} type="text" value={inputValue} className="brutalist-input smooth-type " placeholder="Enter word here..." onChange={handleInputChange} />
            </form>

            <div className="randomWord">
                {word && word.map((randomword) =>(
                    <p key ={randomword._id}>{randomword.word}</p>
                ))}
            </div>
        </div>
         
         <Scene/>
            
       </div>
    )
}
