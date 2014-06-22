<html>
	<meta charset='utf-8'>
	<h1>
		Exercicio 12 Forúm
	</h1>
	<body>
		<a href="http://forum.imasters.com.br/topic/465210-exercicios-para-iniciantes/" title="Clique para acessar o site do fórum" target='_blank'>Link do Forúm</a>
		<br><hr><br>
		<form>
			<label>Quantos Km seu carro faz por litro?</label>
				<input placeholder="Digite quantos km o carro faz por litro..." id="kmLitro">
			<br>
			<label>Quanto tempo foi gasto de viagem?</label>
				<input placeholder="Digite quanto tempo durou a viagem..." id="tempo">
			<br>
			<label>Quanto foi a velocidade média na viagem?</label>
				<input placeholder="Digite quanto foi a velocidade media de viagem..." id="velocidade">
			<br>
			<label>Quanto foi o valor da gasolina?</label>
				<input placeholder="Digite quanto foi a gasolina..." id="gasolina">
			<br>
			<button id="calcule">Calcular</button>
		</form>
		<script>
			var imprime= function(texto) {
				document.write(texto);
				document.write("<br>");
			};			
			var calculaDistancia= function(tempoGasto,velocidadeMedia){
				var distancia=tempoGasto*velocidadeMedia;
				return distancia;
			};
			var calculaLitrosUsados= function(distancia,kmPorLitro){				
				var litrosUsados= distancia/kmPorLitro;
				return litrosUsados;
			};			
			var calculaValorGasto= function(litrosUsados,precoGasolina){
				var valorGastoViagem= litrosUsados*precoGasolina;
				return valorGastoViagem;
			};			
			var exibeNaTela= function(){
				var velocidadeMedia=parseInt(document.getElementById("velocidade").value);
				var tempoGasto=parseFloat(document.getElementById("tempo").value);
				var kmPorLitro=parseInt(document.getElementById("kmLitro").value);
				var precoGasolina=parseFloat(document.getElementById("gasolina").value);				
				var distancia=calculaDistancia(tempoGasto,velocidadeMedia);
				var litrosUsados=calculaLitrosUsados(distancia,kmPorLitro);				
				var valor= calculaValorGasto(litrosUsados,precoGasolina);
				imprime("Se o carro faz " + kmPorLitro + " km por litro, E leva " + tempoGasto.toFixed(2) + " horas para chegar ao destino. Com a velocidade média de " + velocidadeMedia + " km/h.");
				imprime("A distancia é de " + Math.round(distancia) + " km. E é gasto " + Math.round(litrosUsados) + " litros de gasolina." );
				imprime("E a gasolina custando R$ " + precoGasolina.toFixed(2) + ", Se gasta R$ " + valor.toFixed(2) + " nesta viagem.");				
				return false;
			};
			var botao= document.getElementById("calcule");
			botao.onclick= exibeNaTela;			
			
	</script>
	</body>
</html>
