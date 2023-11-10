let arrayPokemons = [];

const form = document.querySelector("form");
const input = form.querySelector('input[name="pokemonName"]');
console.log("input:", input);
form.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchPokemonAsyncAwait(input.value.toLowerCase())
    //searchPokemon(input.value.toLowerCase());
    event.preventDefault();
  }
});

async function searchPokemonAsyncAwait(input) {
  try {
    const URL = `https://pokeapi.co/api/v2/pokemon/`;
    let pokemon_url = URL + input;
    const dataPokemon = await fetch(pokemon_url);
    const data = await dataPokemon.json();
    /** const pokemon = {
      sprite: data.sprite,
      id: data.order,
      name: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types
    } */
    arrayPokemons.push(data);
    printPokemons();
    console.log(data);
  } catch(error) {
    console.log(error.error);
  }
}

function searchPokemon(name) {
  let URL = `https://pokeapi.co/api/v2/pokemon/`;
  let pokemon_url = URL + name;
  console.log(pokemon_url);
  fetch(pokemon_url)
    .then((response) => {
      console.log(response)
      return response.json();
    })
    .then((data) => {
      arrayPokemons.push(data);
      console.log(arrayPokemons);
      //setInfo(data);
      printPokemons();
    });
}

function setInfo(data) {
  const sprite = document.getElementById("sprite");
  sprite.src = data.sprites["front_default"];
  const name = document.getElementById("name");
  const nameFirstLetterUp =
    data.name.charAt(0).toUpperCase() + data.name.slice(1);
  name.innerHTML = nameFirstLetterUp + " - Nº" + data.order;

  const height = document.getElementById("height");
  height.innerHTML = "Altura: " + data.height;
  const weight = document.getElementById("weight");
  weight.innerHTML = "Peso: " + data.weight;

  const typePokemon = document.getElementById("type");
  data.types.forEach((type) => {
    typePokemon.innerHTML =
      "Tipo: " +
      (type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)) +
      "\n";
    console.log(type.type.name);
  });
  const infoPokemon = document.querySelector(".infoPokemon");
  infoPokemon.style.visibility = "visible";
  console.log(data.sprites["front_default"]);
}

function printPokemons() {
  const newElement = document.createElement('div');
  newElement.className = 'visible h-full p-4 m-5 border-2 border-white border-solid infoPokemon';
  
  arrayPokemons.forEach((pokemon,index) => {
    let typesNames = ''
   pokemon.types.forEach((type) => { 
    typesNames = type.type.name
  });
    
newElement.innerHTML = `
  
        <img src="${pokemon.sprites["front_default"]}" alt="" id="sprite" class="m-auto">
        <h1 id="name" class="text-center">${pokemon.name} - Nº + ${pokemon.order}</h1>
        <div class="items-center">
          <ul class="text-white gap-2">
            <li id="height">Altura: ${pokemon.height}</li>
            <li id="weight">Peso: ${pokemon.weight}</li>
            <li id="type">Tipo: ${typesNames}</li>
          </ul>
        </div>
  `
  })
  
  
  const content = document.querySelector('.pokemon_card');
  content.appendChild(newElement);
  
}
