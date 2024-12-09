const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs')

var pokedex = [];
var types = [];

fs.readFile('./pokedex/pokedex.json', function(err, data) {
  if (err) throw err;

  pokedex = Object.values(JSON.parse(data));
});

fs.readFile('./pokedex/types.json', function(err, data) {
  if (err) throw err;

  types = Object.values(JSON.parse(data));
});

app.use(cors())

app.get('/', (req, res) => {
  res.send('hello world')
});

app.get('/pokemon/:id', (req, res) => {
  const id = req.params.id;
  res.send(pokedex[id - 1]);
});

app.get('/types', (req, res) => {
  let fetchedTypes = [];
  types.forEach(type => {
    fetchedTypes.push(type['english']);
  })
  res.send(fetchedTypes);
})

app.get('/list/', (req, res) => {
  let selectedTypes = req.query.selectedTypes;
  console.log(selectedTypes);
  let fetchedPokemon = []
  if(typeof(selectedTypes) === 'string') {
    selectedTypes = [selectedTypes];
    console.log(selectedTypes)
  }
  selectedTypes.forEach((type) => {
    fetchedPokemon.push(pokedex.filter((pokemon) => pokemon.type.includes(type)));
  })
  res.send(fetchedPokemon);
})

app.get('/image/:id', (req, res) => {
  let id = req.params.id;
  if(id < 10) {
    id = "00" + id.toString();
  }
  else if(id < 100) {
    id = "0" + id.toString();
  }
  const path = "./pokedex/images/" + id + ".png";
  const img = fs.readFileSync(path, {encoding: 'base64'});
  res.send(img)
});

app.listen(4000);