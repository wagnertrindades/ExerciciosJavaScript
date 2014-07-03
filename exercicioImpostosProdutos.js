
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
