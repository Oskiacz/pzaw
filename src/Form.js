import './Form.css'
//import { useState } from 'react';

function Form() {

    function handleRadio() {

    }

    return(
        <div className="form">
            <input type="text"></input>
            <input type="text"></input>
            <select>
                <option>CPU</option>
                <option>GPU</option>
                <option>RAM</option>
            </select>

            <label><input type="radio" name="color" value="Red" onChange={handleRadio}></input>Red</label>
            <label><input type="radio" name="color" value="Blue" onChange={handleRadio}></input>Blue</label>
            <label><input type="radio" name="color" value="Green"onChange={handleRadio}></input>Green</label>
            <label><input type="radio" name="color" value="Pink" onChange={handleRadio}></input>Pink</label>
        </div>
    );
}

export default Form;