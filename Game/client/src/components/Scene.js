import "../styles/Scene.css";

import { useNavigate } from "react-router-dom";

import guy from "./images/guy.png";
import ghost from "./images/ghost.png";
import { useGameContext } from "../hooks/useGameContext";
import { useScore } from "../hooks/useScore";
import { useClear } from "../hooks/useAdmin";


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
  const guyid = document.getElementById("guy");


  //gameover function
  const {update, error, isLoading} = useScore()

  const {clear} = useClear()

  const endGame = async() =>{
    //await clear()
    await update()
    navigate('../gameover')

}

if (ghostid != null)
{
    let isAlive = setInterval(function () {
  
        // get current ghostid X position
        let ghostLeft = parseInt(ghostid.getBoundingClientRect().left);
        let guyLeft = parseInt(guyid.getBoundingClientRect().left);
      
        // detect collision
        if (ghostLeft < guyLeft+100 ) {
          // collision

          if (life == 1)
          {
           endGame()
          }
            life -= 1; 
            dispatch({type: 'EDIT_LIVES', payload: life})
            reset_animation();
        }
      }, 10);
}
  
    return(
        <div className="Scene">
            <div>
                <img src={ guy } alt="floor" className="guy" id="guy"></img>
            </div>

            <div>
                <img src={ ghost } alt="floor" className="ghost" id="ghost"></img>
            </div>
        </div>
    )
}

export default Scene