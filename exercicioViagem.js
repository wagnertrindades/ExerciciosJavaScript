		var kmPorLitro=12;
		var tempoGasto=3;
		var velocidadeMedia=100;
		var distancia= tempoGasto*velocidadeMedia;
		var litrosUsados= distancia/kmPorLitro;
		var precoGasolina=2.89;
		var valorGastoViagem= litrosUsados*precoGasolina;
		var imprime= function(texto) {
			document.write(texto);
			document.write("<br>");
		};
		imprime("Se o carro faz " + kmPorLitro + " km por litro, E leva " + tempoGasto.toFixed(2) + " horas para chegar ao destino. Com a velocidade média de " + velocidadeMedia + " km/h.");
		imprime("A distancia é de " + Math.round(distancia) + " km. E é gasto " + Math.round(litrosUsados) + " litros de gasolina." );
		imprime("E a gasolina custando R$ " + precoGasolina.toFixed(2) + ", Se gasta R$ " + valorGastoViagem.toFixed(2) + " nesta viagem.");
