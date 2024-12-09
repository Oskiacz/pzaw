import PokemonCard from "./PokemonCard"
import TypeBar from "./TypeBar"
import {useState} from 'react';
import axios from 'axios';
import {Row, Col, Container} from 'react-bootstrap'

function App(){

  const [selectedTypes, setSelectedTypes] = useState([])
  const [pokemon, setPokemon] = useState([])

  function getPokemon(types) {
    setSelectedTypes(types);
    let url = 'http://localhost:4000/list?'
    selectedTypes.forEach(type => {
      url += 'selectedTypes=' + type + '&'
    });
    axios.get(url)
    .then(res=> {
      setPokemon(res.data)
      console.log(pokemon);
    })
    .catch(err => {
      console.error(err);
    })
  }

  return(
    <>
      <TypeBar selectedTypes={selectedTypes} setSelectedTypes={(types) => {getPokemon(types)}}></TypeBar>

      <Container fluid>
        <Row classname="g-3">
        {pokemon[0]?.map((pokemon, index) => (
          <Col xs={8} sm={5} md={3} lg={2} key={index}>
            <PokemonCard pokemon={pokemon}></PokemonCard>
          </Col>
        
      ))}
        </Row>
      </Container>

    </>
  ) 

}

export default App