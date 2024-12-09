import { useEffect, useState } from "react";
import axios from 'axios';

function TypeBar({ selectedTypes, setSelectedTypes }) {
    const [types, setTypes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/types')
            .then(res => {
                setTypes(res);
            })
            .catch(err => {
                console.error(err);
            })
    })

    function handleTypes(e) {
        const selectedType = e.target.value;
        let selectedTypesCopy = selectedTypes;
        console.log(selectedType);

        if (selectedTypes.indexOf(selectedType) === -1) {
            selectedTypesCopy.push(selectedType)
        }
        else {
            selectedTypesCopy.splice(selectedTypes.indexOf(selectedType), 1);
        }
        setSelectedTypes(selectedTypesCopy)
        console.log(selectedTypes)
    }

    return (
        <>
            {types.data?.map(type => <div >{type}<input type="checkbox" key={type} value={type} onChange={handleTypes}></input></div>)}
        </>
    )
}

export default TypeBar