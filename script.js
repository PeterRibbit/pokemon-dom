var btn = document.getElementById('get-pokemon');
var currPokemonContainer = document.getElementById('pokemon-list');

btn.addEventListener('click', function(event) {
    displayRandomPokemon();
});

function displayRandomPokemon() {
    var randomPokemon = getRandElem(pokemonList);
    var newPokemon = document.createElement('div');
    
    var pokeName = document.createElement('h3');
    pokeName.innerText = randomPokemon.name;
    newPokemon.appendChild(pokeName);
    
    var pokeType = document.createElement('h4');
    pokeType.innerText = randomPokemon.type;
    newPokemon.appendChild(pokeType);

    if (randomPokemon.flying) {
        var pokeFlying = document.createElement('h5');
        pokeFlying.innerText = 'flying';
        newPokemon.appendChild(pokeFlying);
    }

    currPokemonContainer.innerHTML = newPokemon.outerHTML;
}

function getRandElem(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}