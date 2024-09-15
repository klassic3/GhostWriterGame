import fullheart from "./images/heart.png";
import emptyheart from "./images/empty.png";
    


const Lives = ({life}) => {
    var heart1 = null;
    var heart2 = null;
    var heart3 = null;
    console.log(life)
    if (life > 0)
    {
        heart1 = fullheart;
    }
    else{
        heart1 = emptyheart;
    }
    if (life > 1)
    {
        heart2 = fullheart;
    }
    else{
        heart2 = emptyheart;
        }
    if (life > 2)
    {
        heart3 = fullheart;
    }
    else{
        heart3 = emptyheart;
    }

    return(
        <div className="imgcontainer">
            <img src={heart1 } alt="fullheart"></img>
            <img src={heart2 } alt="fullheart"></img>
            <img src={heart3 } alt="fullheart"></img>
        </div>
    )
}
export default Lives
    