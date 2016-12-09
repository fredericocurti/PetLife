var indexes = JSON.parse(localStorage.petlist);
var choice = localStorage.escolha;

$('#cd-timeline').append($("#timeline"));




$( document ).ready(function() {
    document.getElementById("showimg").setAttribute("src",indexes[choice]["Foto"]);
});

