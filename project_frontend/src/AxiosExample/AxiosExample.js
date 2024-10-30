import axios from "axios";
import { useState } from "react";

function AxiosExample() {

    const [data, setData] = useState();

    function handleButton() {
        axios.get('https://raw.githubusercontent.com/jdorfman/awesome-json-datasets/refs/heads/master/tests/relaxed.json')
        .then((response) => {
            console.log(response.data)
            setData(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {

        })
        
    }

    return (
        <>
            <input type="button" onClick={handleButton} value="axios"></input>
            {data.keys().map((el, i) => {
                console.log(el);
            })}
        </>
    )
}

export default AxiosExample