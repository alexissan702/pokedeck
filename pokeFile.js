
let pokeArray = [
    {name: 'bulbasaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    {name: 'ivysaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
    {name: 'charmander', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
    {name: 'charizard', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
    {name: 'squirtle', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
  
  ];
var display = document.getElementById("display");
var name = document.getElementById("name");
var image = document.getElementById("pokemon");
let index = 0;
display.addEventListener('click', run);
 function run() {
    if (index > pokeArray.length) {
        index=0;
    }
    else {
        name.innrHTML = pokeArray[index].name;
        image.src = pokeArray[index].image;
    }
    index++;
    }


