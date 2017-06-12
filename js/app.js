var cargarPagina = function(){
	crearPokemons();
};

function crearPokemons(pokemons) {
	$.getJSON("http://pokeapi.co/api/v2/pokemon/",
	function (response) {
	 var pokemons = response.results;
	 crearDinamicamente(pokemons);
});
}

var crearDinamicamente = function (pokemons) {
	var $div = $("#pokemons");
	pokemons.forEach(function (pokemon, i) {
	var $contenedorPokemons = $("<div/>", {'class': 'col 4'});
	var $a = $("<a />", {'class': 'col l3 waves-effect waves-light btn'});
	var $contenedorImagen = $("<img/>");
	$contenedorImagen.attr("src",imagenPokemon[i].imagen);

	$a.attr("data-url", pokemon.url);
	$a.text(pokemon.name);
	$div.append($contenedorPokemons).append($a);
	$contenedorPokemons.append($contenedorImagen);


});

};
var plantillaPokemon ='<div class="col s12 m8 offset-m2 l6 offset-l3">' +
  '<div class="card-panel grey lighten-5 z-depth-1">' +
  '<div class="row valign-wrapper">'+ '<div class="col s2">'+
  '<img src="__img__" alt="" class="circle responsive-img">'+ '</div>'+
  '<div class="col s10">' +'<span class="black-text">__nombre__</span>' + '</div>'+
  '</div>'+'</div>'+
      '</div>';

 var mostrarPokemon = function () {
 	 var imagenPokemon = $(this).data("src");
  var contenedorPokemon = $("#imagen");
  $.getJSON(imagenPokemon , function (response) {
 		contenedorPokemon.html(
    plantillaPokemon.replace("__nombre__", response.name)
 	.replace("__img__", response.imagenPokemon)
 );
 });
 }
var imagenPokemon = [
{
	"imagen" : "./assets/img/bulbasaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},
{
	"imagen": "./assets/img/ivysaur.png"
},

];


$(document).ready(cargarPagina);
