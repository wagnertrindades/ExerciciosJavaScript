<!DOCTYPE html>
<html>
	<head>
		<meta charset='utf-8'>
		<title>Exercicio Impostos</title>	
	</head>
	<body>
		<form>
			<label>
				Informe qual é o produto:
				<input id="produto">
			</label>
			<br>
			<label>
				Valor do produto:
				<input id="valor">
			</label>
			<br>
			<label>
				Qual a porcentagem de imposto pago:
				<input id="imposto">
				%
			</label>
			<br>
			<button id="calc">Calcular Imposto</button>
		</form>
		<script>
			var imprime= function(texto){
				document.write(texto);
				document.write("<br>");
			};
			var calculaImposto= function(produto,imposto){
				var resultado= produto*(imposto/100);
				return resultado;
			};
			var mostraImposto= function(event){
				var nome= document.getElementById("produto").value;
				var produto= parseFloat(document.getElementById("valor").value);
				var imposto= parseFloat(document.getElementById("imposto").value);
				var resultado= calculaImposto(produto,imposto);
				imprime("Se você pagou R$ " + produto.toFixed(2) + " no produto: " + nome + ". Você pagou R$ " + resultado.toFixed(2) + " somente de impostos.");
				event.preventDefault();
			};
			var botao= document.getElementById("calc");
			botao.onclick= mostraImposto;
		</script>
	</body>
</html>
