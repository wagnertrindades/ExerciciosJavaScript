<html>
	<head>
		<meta charset='utf-8'>
		<title>Exercicio Calculadora</title>
	</head>
	<body>
		<h1>Calculadora</h1>
		<form>
			<label>
				Primeiro numero
				<input id="numero1">
			</label>
			<label>
				Segundo numero
				<input id="numero2">
			</label>
			<button id="soma">+</button>
			<button id="subtracao">-</button>
			<button id="divisao">/</button>
			<button id="multiplicacao">*</button>
		</form>
		<script>
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
		</script>
	</body>
</html>
