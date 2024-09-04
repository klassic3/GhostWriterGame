import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "../styles/Root.css"

export default function Root(){

    const inputRef = useRef(null)

    return(
        <div className="container">
            <h1 className="title text-light">Write em off</h1>

            <h3 className="subtitle text-light">Type to kill the monsters.</h3>

            <form id="form">
                <input ref={inputRef} type="text" className="userid" placeholder="Username*"/>
            </form>

            <div className="start"> 
                <Link className="Btn" to={"game"}>Begin</Link>

            </div>

        </div>
    )
}