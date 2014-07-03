
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
