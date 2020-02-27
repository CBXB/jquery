console.log(pokemon[0].name);
console.log(pokemon[0].image);
console.log(pokemon[0].moves[0]);

$("#bulbasaur h1").text(pokemon[0].name);
$("#bulbasaur img").attr("src",pokemon[0].image)
$.each(pokemon[0].moves, function (index, value){
  $('#bulbmove').append('<li>'+value+'</li>')
})



$("#ivysaur h1").text(pokemon[1].name);
$("#ivysaur img").attr("src",pokemon[1].image)
for (var i=0; i<pokemon[1].moves.length; i++){
  $("#ivysaurm").append("<li>"+pokemon[1].moves[0]+"</li>")
}


$("#venusaur h1").text(pokemon[2].name);
$("#venusaur img").attr("src",pokemon[2].image)
$.each(pokemon[2].moves, function (index, value){
  $('#venusaurm').append('<li>'+value+'</li>')
})


