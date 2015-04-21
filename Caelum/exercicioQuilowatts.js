		var quilowatts=100;
		var salarioMinimo=415.00;
		var valorCemQuilowatts= salarioMinimo/7;
		var qtdQuilowattsGasta=400;
		var valorPorQuilowatts= valorCemQuilowatts/100;
		var valorQuilowattsGasto= qtdQuilowattsGasta*valorPorQuilowatts;
		var descontoPorcento=10;
		var valorDoDesconto= valorQuilowattsGasto*(descontoPorcento/100);
		var valorComDesconto= valorQuilowattsGasto-valorDoDesconto;
		var imprime= function(texto) {
			document.write(texto);
			document.write("<br>");
		};
		var pula= function() {
			document.write("<hr><br>");
		};
		imprime("Se " + Math.round(quilowatts) + " quilowatts corresponde a 1/7 do salário minimo. E o salário minimo é " + salarioMinimo.toFixed(2));
		imprime("Então o valor de cada quilowatt é R$ " + valorPorQuilowatts.toFixed(2));
		pula();
		imprime("Se foi gasto " + Math.round(qtdQuilowattsGasta) + " quilowatts. Então a conta mensal é de R$ " + valorQuilowattsGasto.toFixed(2));
		pula(); 
		imprime("O valor com o desconto de " + Math.round(descontoPorcento) + " % é R$ " + valorComDesconto.toFixed(2));
