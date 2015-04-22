
// var peso1 = document.getElementById("peso-1").textContent; // pega o peso pelo a id e textContent é o conteudo sem as tags
// var altura1 = document.getElementById("altura-1").textContent; // pega a altura pelo a id e textContent é o conteudo sem as tags
// var nome1 = document.getElementById("nome-1").textContent; // pega o nome pelo a id e textContent é o conteudo sem as tags

// //Objetos JS
// var leonardo = { 
// 	peso : peso1,
// 	altura : altura1,
// 	nome : nome1
// };


// var peso2 = document.getElementById("peso-2").textContent; // pega o peso pelo a id e textContent é o conteudo sem as tags
// var altura2 = document.getElementById("altura-2").textContent; // pega a altura pelo a id e textContent é o conteudo sem as tags
// var nome2 = document.getElementById("nome-2").textContent; // pega o nome pelo a id e textContent é o conteudo sem as tags

// //Objetos JS
// var paulo = { 
// 	peso : peso2,
// 	altura : altura2,
// 	nome : nome2
// };

// //Cria um Array com os objetos Paulo e Leonardo
// var pacientes = [leonardo, paulo];

var trsPacientes = document.getElementsByClassName("paciente"); //Array de trs pacientes


for(posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++){

	var pacienteTr = trsPacientes[posicaoAtual];


	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

	var paciente = {
		nome : tdNome.textContent,
		peso : tdPeso.textContent,
		altura : tdAltura.textContent
	};

	if( paciente.altura != 0){
		
		var imc= paciente.peso / (paciente.altura * paciente.altura);

		var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
		tdImc.textContent = imc;
		
		console.log(imc); // imprime 100
	}else{
		console.log("Erro! Sua altura não pode ser abaixo de zero!");
	}

}
