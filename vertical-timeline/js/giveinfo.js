var cloneCount = 0;

console.log("estou funcionando")

var indexes = JSON.parse(localStorage.petlist);
var choice = JSON.parse(localStorage.escolha);


var emptylist = []

	if (localStorage.petlist) {
	    var indexes = JSON.parse(localStorage.petlist);
	} else {
	    var indexes = [];
}
	if (indexes[choice][1]) {
	    indexes[choice][1] = indexes[choice][1];
	} else {
	    indexes[choice].push(emptylist);
}



function appendevento(x){
	//document.getElementById("headPet").style.backgroundImage = "url(" + indexes[choice][0]["Foto"] + ")";
	document.getElementById("headPet").setAttribute("style","background: linear-gradient(rgba(173,204,85, 1), rgba(173,204,85, 0.9), rgba(173,204,85, 0.6)), url(" + indexes[choice][0]["Foto"] + "); background-size: cover;");
	if (x > 1) {
		if (indexes[choice][1].length > 0) {
			$("#cd-timeline").css("visibility","visible");
		} else {
			document.getElementById("nenhumEvento").innerHTML = "Você não possui nenhum evento para este pet."
		}
		
		for (i=0; i < indexes[choice][1].length; i++) {
			console.log("function ran"+i);
			
			$('#timeline-element')
		        .clone()
		        .attr('id', 'timeline-element'+ cloneCount++)
		        .insertAfter($('[id^=id]:last'))
		        //.text('id ' + (cloneCount-1)); //<--For DEMO
			//$( "#id" + (cloneCount-1)).clone().appendTo( "#petlis" );

			//clone = $( "#petcard" ).clone();
			//clone.prevObject["0"].innerHTML = "PINTO"
			document.getElementById("event-title").innerHTML = indexes[choice][1][i]["Serviço"] + "<strong class='date'> | " + indexes[choice][1][i]["Data"];+ "</strong>"
			
			document.getElementById("descri").innerHTML = indexes[choice][1][i]["Descricao"];
			// document.getElementById("NumCard").setAttribute("onclick", "redirect("+i+");");
			
			if (indexes[choice][1][i]["Pago"]) {
				document.getElementById("cd-date").setAttribute("style","color:#00c853;");
				document.getElementById("cd-date").innerHTML = "Pago  R$" + indexes[choice][1][i]["Preço"];
				$('#cd-date').attr('id', 'cd-date'+ (cloneCount-1))
			}
			else {
				document.getElementById("cd-date").setAttribute("style","color:#b71c1c;");
				document.getElementById("cd-date").innerHTML = 'Em aberto  R$' + indexes[choice][1][i]["Preço"];
				$('#cd-date').attr('id', 'cd-date'+ (cloneCount-1))
			}

			if (indexes[choice][1][i]["Serviço"] == "Banho"){
				document.getElementById("servpic").setAttribute("src","img/banho.png");
				document.getElementById("servbg").setAttribute("class","cd-timeline-img banho");
				
			}

			if (indexes[choice][1][i]["Serviço"] == "Tosa"){
				document.getElementById("servpic").setAttribute("src","img/tosa.png");
				document.getElementById("servbg").setAttribute("class","cd-timeline-img tosa");
			}

			if (indexes[choice][1][i]["Serviço"] == "Veterinária"){
				document.getElementById("servpic").setAttribute("src","img/vet.png");
				document.getElementById("servbg").setAttribute("class","cd-timeline-img vet");
			}

			if (indexes[choice][1][i]["Serviço"] == "Compra de Produtos"){
				document.getElementById("servpic").setAttribute("src","img/prod.png");
				document.getElementById("servbg").setAttribute("class","cd-timeline-img prod");
			}


			if (indexes[choice][1][i]["Serviço"] == "Vários"){
				document.getElementById("servpic").setAttribute("src","img/var.png");
				document.getElementById("servbg").setAttribute("class","cd-timeline-img var");
			}


			console.log(x);
			//clone.appendTo( "#petlis" );
			//n ++
		}
	}
}



	function showinfo(){
	document.getElementById("showimg").setAttribute("src",indexes[choice][0]["Foto"]);
}

	function cadastra_evento(x){

		var data = $("#eventdate").val();
		var service = $("#servico").val();
		var desc = $("#descricao").val();
		var preco = $("#preco").val();
		var pago = $('#pago').prop('checked');

		var evento = {}
		evento["pet_id"] = choice;
		evento["Data"] = data
		evento["Serviço"] = service;
		evento["Descricao"] = desc;
		evento["Preço"] = preco;
		evento["Pago"] = pago;

		var eventos = []
		eventos["Index"] = evento;

		x.push(evento);
		localStorage.setItem("petlist",JSON.stringify(indexes));

		location.reload();

}
	
$(document).ready(function() {
	appendevento(indexes.length);
	
});

var editId = false;

$(document).ready(function(){
	$('.modal').modal();
	$('select').material_select();
	$('.ed').click(function() {
	    editId = $(this).parent().children("span").attr('id');
	    console.log(editId);
	});
});


function editar() {

	if ($('#editpago').prop('checked')) {
		document.getElementById(editId).setAttribute("style","color:#00c853;");
		document.getElementById(editId).innerHTML = "Pago  R$" + indexes[choice][1][editId.substr(editId.length - 1)]["Preço"];
		
	} else {
		document.getElementById(editId).setAttribute("style","color:#b71c1c;");
		document.getElementById(editId).innerHTML = 'Em aberto  R$' + indexes[choice][1][editId.substr(editId.length - 1)]["Preço"];

	}

	indexes[choice][1][editId.substr(editId.length - 1)]["Pago"] = $('#editpago').prop('checked');
	localStorage.setItem("petlist",JSON.stringify(indexes));
}


