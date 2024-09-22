import "../styles/Scene.css";

import { useNavigate } from "react-router-dom";

import floor from "./images/flor.png";
import guy from "./images/guy.png";
import ghost from "./images/ghost.png";
import { useGameContext } from "../hooks/useGameContext";


export const reset_animation= () => {
        // Your code that accesses the elements 
    var el = document.getElementById('ghost');
    if (el){
        el.style.animation = 'none';
        console.log(el.offsetHeight);/* trigger reflow */
        el.style.animation = null; 
    }
   
    
  }
export var life = null;

const Scene = () => {
    const navigate = useNavigate();
    const {lives, dispatch} = useGameContext()
    
     life = lives;

    //gameover function
  const ghostid = document.getElementById("ghost");

if (ghostid != null)
{
    let isAlive = setInterval(function () {
  
        // get current ghostid X position
        let ghostLeft = parseInt(ghostid.getBoundingClientRect().left);
      
        // detect collision
        if (ghostLeft < 250 ) {
          // collision

          if (life == 1)
          {
            navigate('../gameover')
          }
            life -= 1; 
            dispatch({type: 'EDIT_LIVES', payload: life})
            reset_animation();
        }
      }, 10);
}
  
    return(
        <div className="Scene">
            <div className="Above">
                <div>
                    <img src={ guy } alt="floor" className="guy" id="guy"></img>
                </div>

                <div>
                    <img src={ ghost } alt="floor" className="ghost" id="ghost"></img>
                </div>
            
            </div>
           
            <div className="floor">
            </div>
        </div>
    )
}

export default Scene