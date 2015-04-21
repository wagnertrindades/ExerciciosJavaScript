
			var imprime= function(texto){
				document.write(texto);
				document.write("<br>");
			};
			var calculaSoma= function(event){
				var numero1= parseFloat(document.getElementById("numero1").value);
				var numero2= parseFloat(document.getElementById("numero2").value);
				var resultado= numero1 + numero2;
				imprime("A soma dos numeros é: " + resultado);
				event.preventDefault();
			};
			var calculaSubtracao= function(event){
				var numero1= parseFloat(document.getElementById("numero1").value);
				var numero2= parseFloat(document.getElementById("numero2").value);
				var resultado= numero1 - numero2;
				imprime("A subtração dos numero é: " + resultado);
				event.preventDefault();
			};
			var calculaDivisao= function(event){
				var numero1= parseFloat(document.getElementById("numero1").value);
				var numero2= parseFloat(document.getElementById("numero2").value);
				var resultado= numero1/numero2;
				imprime("A divisao dos numeros é: " + resultado);
				event.preventDefault();
			};
			var calculaMultiplicacao= function(event){
				var numero1= parseFloat(document.getElementById("numero1").value);
				var numero2= parseFloat(document.getElementById("numero2").value);
				var resultado= numero1*numero2;
				imprime("A multiplicação dos numeros é: " + resultado);
				event.preventDefault();
			}
			var botaoSoma= document.getElementById("soma");
			botaoSoma.onclick= calculaSoma;
			var botaoSubtracao= document.getElementById("subtracao");
			botaoSubtracao.onclick= calculaSubtracao;
			var botaoDivisao= document.getElementById("divisao");
			botaoDivisao.onclick= calculaDivisao;
			var botaoMultiplicacao= document.getElementById("multiplicacao");
			botaoMultiplicacao.onclick= calculaMultiplicacao;
