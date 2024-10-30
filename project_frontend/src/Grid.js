import data from './posts.json'
import { useState } from 'react';
import Post from './Post';
import "./Grid.css"


console.log(data);




function Grid() {

    const [range, setRange] = useState(50);

    function handleInput(event) {
        setRange(event.target.value)
    }  
    
    function randomIcon() {
        
        var number = Math.floor(Math.random() * 40 + 1);
        var string = "0";
        if(number < 10) {
            string += number.toString();
        }
        else {
            string = number.toString();
        }
        return("./icons/Icon14_" + string + ".png")
    }

    return(
        <>
        <p> {range} </p>
        <input type="range" min="1" max="100" onChange={event => handleInput(event)}></input>

        <div className='grid'>
            {
                data.slice(0, range).map((el, i) => <Post key={el.id} title={el.title} body={el.body} icon={randomIcon()}/>)
            }
        </div>
        </>
    )
}

export default Grid;