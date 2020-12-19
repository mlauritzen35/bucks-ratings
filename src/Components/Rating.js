import './Rating.css'

const Rating = ({ name, id, rating, setRating }) => {

    async function handleClick(e) {
        if(e.target.value === "N/A") {
            setRating({
                ...rating,
                [id]: null
            })  
        }
        else {
            setRating({
                ...rating,
                [id]: parseInt(e.target.value)
            })
        }
    }
    return (
        <div className="RatingDiv">
            <header className="Header">{name}</header>
            <div className="SelectorsDiv">
                <div className="InputDiv">
                    <input value="N/A" type="radio" id={`${name}-N/A`} checked={rating[id] === null} onChange={handleClick}/>
                    <label id={`${name}-N/A`}>N/A</label>
                </div>

                <div className="InputDiv">
                    <input value="1" type="radio" id={`${name}-1`} checked={rating[id] === 1} onChange={handleClick}/>
                    <label id={`${name}-1`}>1</label>
                </div>

                <div className="InputDiv">
                    <input value="2" type="radio" id={`${name}-2`} checked={rating[id] === 2} onChange={handleClick}/>
                    <label id={`${name}-2`}>2</label>
                </div>

                <div className="InputDiv">
                    <input value="3" type="radio" id={`${name}-3`} checked={rating[id] === 3} onChange={handleClick}/>
                    <label id={`${name}-3`}>3</label>
                </div>

                <div className="InputDiv">
                    <input value="4" type="radio" id={`${name}-4`} checked={rating[id] === 4} onChange={handleClick}/>
                    <label id={`${name}-4`}>4</label>
                </div>

                <div className="InputDiv">
                    <input value="5" type="radio" id={`${name}-5`} checked={rating[id] === 5} onChange={handleClick}/>
                    <label id={`${name}-5`}>5</label>
                </div>

                <div className="InputDiv">
                    <input value="6" type="radio" id={`${name}-6`} checked={rating[id] === 6} onChange={handleClick}/>
                    <label id={`${name}-6`}>6</label>
                </div>

                <div className="InputDiv">
                    <input value="7" type="radio" id={`${name}-7`} checked={rating[id] === 7} onChange={handleClick}/>
                    <label id={`${name}-7`}>7</label>
                </div>

                <div className="InputDiv">
                    <input value="8" type="radio" id={`${name}-8`} checked={rating[id] === 8} onChange={handleClick}/>
                    <label id={`${name}-8`}>8</label>
                </div>

                <div className="InputDiv">
                    <input value="9" type="radio" id={`${name}-9`} checked={rating[id] === 9} onChange={handleClick}/>
                    <label id={`${name}-9`}>9</label>
                </div>

                <div className="InputDiv">
                    <input value="10" type="radio" id={`${name}-10`} checked={rating[id] === 10} onChange={handleClick}/>
                    <label id={`${name}-10`}>10</label>
                </div>
            </div>
        </div>
    )
}

export default Rating