

var botao = document.querySelector("#adicionar-paciente");

//Evento click do botao
botao.addEventListener("click", function(event){

	var campoNome = document.querySelector("#campo-nome");
	var campoPeso = document.querySelector("#campo-peso");
	var campoAltura = document.querySelector("#campo-altura");

	//estrutura de um novo tr com paciente
	var pacienteNovo = 	"<tr class='paciente'>"+
						"<td class='info-nome'>"+ campoNome.value +"</td>"+
						"<td class='info-peso'>"+ campoPeso.value +"</td>"+
						"<td class='info-altura'>"+ campoAltura.value +"</td>"+
						"<td class='info-imc'>"+ Math.round(campoPeso.value / (campoAltura.value * campoAltura.value)) +"</td>"+
					"</tr>"; 


	//document.getElementsByTagName("table")[0]; Chama o elemento por sua tag

	//document.querySelectorAll("table"); Chama o elemento identificando se é tag, classe, ou id e com o All ele monta um array com varios elementos

	var tabela = document.querySelector("table"); //Chama o elemento identificando que é tag e chama apenas 1 elemento sem montar o array

	tabela.innerHTML += pacienteNovo;


	//Apaga os valores escritos dentro dos campos
	campoNome.value = "";
	campoPeso.value = "";
	campoAltura.value = "";



	//event.preventDefault para o padrao de botao dentro de um form que é recarregar a pagina não seja executado
	event.preventDefault();
});