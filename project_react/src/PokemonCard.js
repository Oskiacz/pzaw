import axios from 'axios';
import { useState, useEffect } from 'react';
import './PokemonCard.css'

function PokemonCard({ pokemon }) {
    let url = 'http://localhost:4000/image/' + pokemon.id;
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setImage("data:image/png;base64, " + res.data);
            setLoading(false)
        })
        .catch(err => {
            console.error(err)
        })
    })

    return (

        <div className="pokemonCard" key={pokemon.id}>
             {loading ? <>loading.........</> : <img src={image} className="image" alt={pokemon.name}></img>}
            <p className="row">Name: {pokemon.name.english}</p>
            <p className="type">Type: {pokemon.type.map(type => <span>{type} </span>)}</p>
            <p className="row">Stats: </p>
            
                {Object.entries(pokemon.base).map((stat, index) => (
                    <p className="stat" key={index}>{stat[0]}: {stat[1]}</p>
                ))}
        </div>
    )
}

export default PokemonCard