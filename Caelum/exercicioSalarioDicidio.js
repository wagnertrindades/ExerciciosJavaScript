			var imprime= function(texto){
				document.write(texto);
				document.write("<br>");
			};
			var contaDicidio= function(salario,dicidio){//Calcula Dicidio
				var resultado= salario + (salario*(dicidio/100));
				return resultado;
			};
			var lancaFuncionarios= function(event){//Pega numero de funcionarios e cria inputs para cada funcionário
				var numFuncionarios= parseInt(document.getElementById("qtdFuncionarios").value);
				var sal=1;
				var nFun=1;
				while(sal<=numFuncionarios){
					imprime("<form><label>Digite o nome do funcionário: <input placeholder='Nome..' id='nome"+ nFun +"'></label><label>E seu salário: <input placeholder='Salário..' id='salario"+ sal +"'></label></form>");
					nFun++;
					sal++;
				}
				imprime("<form><label>Quanto vai ser o aumento do dicidio?<input id='dicidio'>%</label></form>");
				imprime("<form><button id='funcionarios'>Calcule Dicidio</button></form>");
				var calculaDicidio= function(event){//Buscar os valores dos inputs e imprime os resultados
					var dicidio= parseFloat(document.getElementById("dicidio").value);
					sal=1;
					nFun=1;
	 				while(sal<=numFuncionarios){
	 					var salario= parseFloat(document.getElementById("salario" +sal).value);
	 					var nome= document.getElementById("nome" + nFun).value;
						var valorDicidio= contaDicidio(salario,dicidio);
						console.log(salario);
						imprime("O salário atual do funcionário " + nome + " é R$ " + salario.toFixed(2) + " e o novo salário é R$ " + valorDicidio.toFixed(2)); 
						nFun++;
						sal++;
					}
					event.preventDefault();
				};
				var botaoCalcula= document.getElementById("funcionarios");
				botaoCalcula.onclick= calculaDicidio;
				event.preventDefault();
			};
			var botao= document.getElementById("ok");
			botao.onclick= lancaFuncionarios;
