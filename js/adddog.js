// var cardPet = $(".petcard").html();
// var oi = "<div class='col s6 m7' class='petcard'><div class='card'>Minha rola eh grande</div></div>";

var n = 0;
var cloneCount = 0;

if (localStorage.petlist) {
    var indexes = JSON.parse(localStorage.petlist);
} else {
    var indexes = [];
}

function appendpets(x){
	if (x > 0){
		for (i=0; i < indexes.length; i++) {
			$('#petcard')
		        .clone()
		        .attr('id', 'petcard'+ cloneCount++)
		        .insertAfter($('[id^=id]:last'))
		        //.text('id ' + (cloneCount-1)); //<--For DEMO
			//$( "#id" + (cloneCount-1)).clone().appendTo( "#petlis" );

			//clone = $( "#petcard" ).clone();
			//clone.prevObject["0"].innerHTML = "PINTO"
			document.getElementById("petimg").innerHTML = '<img src="' + indexes[i][0]["Foto"] +'" width="inherit" class="thumbpet">';
			document.getElementById("petname").innerHTML = indexes[i][0]["Nome do Pet"];
			document.getElementById("clientname").innerHTML = indexes[i][0]["Nome do Cliente"];
			document.getElementById("NumCard").setAttribute("onclick", "redirect("+i+");");
			
			console.log(x);
			//clone.appendTo( "#petlis" );
			//n ++
			}
	}
}

// if (localStorage.length != 0){
// 	appendpets();
// }



function redirect(ind){
	localStorage.setItem("escolha", ind);

	setTimeout(function() {window.location = "vertical-timeline/pet_timeline.html"}, 300);
}

function clearpets(){
	localStorage.removeItem("petlist");
	localStorage.petcount = 0;
	location.reload();
}

$(document).ready(function() {
	appendpets(indexes.length);
	
});


// console.log($( "#petcard" ).clone());
// console.log(m1,m2,m3,m4,m5);

// content.innerHTML = content.innerHTML.replace('indexes[0]','indexes[1]');

function checkcount(){
    if (localStorage.petcount == 0){
	document.write("Nenhum pet registrado");
	}
	else {
		$("#check").remove();
	}
}


function showkey(){
	//console.log(petarray);
}

function cadastra_pet(x){
	var pet_name = $("#nome").val();
	var pet_img = imglink
	var pet_birthday = $("#birthday").val();
	var pet_race = $("#raca").val();
	var pet_color = $("#cor").val();

	var client_name = $("#user").val();
	var client_email = $("#email").val();
	var client_phone = $("#phone").val();

	var pets = {}
	pets["Nome do Pet"] = pet_name;
	pets["Foto"] = pet_img;
	pets["Aniversário"] = pet_birthday;
	pets["Raça"] = pet_race;
	pets["Cor"] = pet_color;
	pets["Nome do Cliente"] = client_name;
	pets["Email"] = client_email;
	pets["Telefone"] = client_phone;

	var index = {}
	index["Index"] = pets
	
	x.push([pets]);
	localStorage.setItem("petlist",JSON.stringify(x));
	location.reload();
}

function petCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.petcount) {
            localStorage.petcount = Number(localStorage.petcount)+1;
        } else {
            localStorage.petcount = 1;
        }
    }
}

function resetcount(){
	localStorage.petcount = 0;
}

function hide_img(){
	$("#dogpic").hide();
}


$('.modal').modal({
		      dismissible: true, // Modal can be dismissed by clicking outside of the modal
		      opacity: .5, // Opacity of modal background
		      in_duration: 200, // Transition in duration
		      out_duration: 200, // Transition out duration
		      starting_top: '100%', // Starting top style attribute
		      ending_top: '100%', // Ending top style attribute
		      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
		        alert("Ready");
		        
		      },
		      complete: function() { alert('Closed'); } // Callback for Modal close
		    }
		  );

$(document).ready(function(){
    $('.modal').modal();
    $('select').material_select();
    $('.ed').click(function() {
	    editId = $(this).parent().attr('id');
	    console.log(editId);
	});
});
       	

function hidecounter(){
	$("#check").hide();
}

  function show_img(){
    $("#dogpic").show();
  }

  function remove(){
    $("#loading").hide();
  }

  function restore(){
    $("#loading").hide();
    Materialize.toast('Usuário adicionado com sucesso!', 4000);
  }

function editarImg() {

	document.getElementById(editId).setAttribute("style","color:#00c853;");
	document.getElementById(editId).innerHTML = '<div><i class="medium material-icons">done</i></div>';
		
	
}