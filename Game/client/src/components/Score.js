const Score = ({score}) => {
    
    if (score > 5)
    {
        return(
            <h1 className="subtitle text-light">Your Score was {score} huh... not bad for a beginner.</h1>
        )
    }
    else{
        return(
            <h1 className="subtitle text-light">Pff Your Score was {score}?! My Grandma plays better than you!!</h1>
        )
    }
    
}
export default Score
    