import React, {  useRef, useState } from "react";
import { Link } from "react-router-dom";
import {useRegister} from "../hooks/useRegister"

import "../styles/Root.css"

export default function Root(){


    const [name, setName] = useState('')
    const {register, error, isLoading} = useRegister()
    //window.location.reload();

    const startGame = async(e) =>{
        e.preventDefault()

        await register(name)

    }

    return(
        <div className="container">
            <div className="mainimage"> </div>
            <div className="HTP"> </div>
            
            <form id="form">
                <input type="text" className="userid" placeholder="Username*" onChange={(e) => setName(e.target.value) } value ={name}/>
            </form>

            <div className="start"> 
                <Link className="Btn" onClick={startGame} disabled={isLoading}>Begin</Link>

            </div>
            {error && <div className="error">{error}</div>}

        </div>
    )
}