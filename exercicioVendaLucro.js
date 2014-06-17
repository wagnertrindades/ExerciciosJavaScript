			var calculaPorCento= function(valor,porcentagem){
				var calculo= (valor/porcentagem) + valor;
				return calculo;
			};
			var imprime= function(texto){
				document.write(texto);
				document.write("<br>");
			};
			var nomeProduto= prompt("Qual nome do Produto?");
			var valorProduto= parseFloat(prompt("Qual valor do " + nomeProduto + "?"));
			var lucro45= calculaPorCento(valorProduto,45);
			var lucro35= calculaPorCento(valorProduto,35);
			var lucro25= calculaPorCento(valorProduto,25);
			var lucro15= calculaPorCento(valorProduto,15);
			imprime("Exercicio 15 - <a href='http://forum.imasters.com.br/topic/465210-exercicios-para-iniciantes/' title='Clique para ir para o forum' target='_blank'>Site Forum</a>");
			if(valorProduto<20){
				imprime("Será pago R$ " + lucro45.toFixed(2) + " pelo " + nomeProduto + " com 45% de lucro.");
			}else if((valorProduto<20 || valorProduto==20) && valorProduto<40){
				imprime("Será pago R$ " + lucro35.toFixed(2) + " pelo " + nomeProduto + " com 35% de lucro.");
			}else if((valorProduto>40 || valorProduto==40)  && valorProduto<60){
				imprime("Será pago R$ " + lucro25.toFixed(2) + " pelo  " + nomeProduto + " com 25% de lucro.");
			}else{
				imprime("Será pago R$ " + lucro15.toFixed(2) + " pelo " + nomeProduto + " com  15% de lucro.");
			}
