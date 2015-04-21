
var peso = document.getElementById("peso-1").textContent; // pega o peso pelo a id e textContent é o conteudo sem as tags
var altura = document.getElementById("altura-1").textContent; // pega a altura pelo a id e textContent é o conteudo sem as tags
var nome = document.getElementById("nome-1").textContent; // pega o nome pelo a id e textContent é o conteudo sem as tags

//Objetos JS
var paciente = { 
	peso : peso,
	altura : altura,
	nome : nome
};


if( altura != 0){
	var imc = paciente.peso / (paciente.altura * paciente.altura);

	var tdDoImc = document.getElementById("imc-1");
	tdDoImc.textContent = imc; //altera o valor do elemento do DOM imc

	console.log(imc); // imprime 100
}else{
	console.log("Erro! Sua altura não pode ser abaixo de zero!");
}

