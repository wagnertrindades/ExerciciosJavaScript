			var imprime= function(texto){
				document.write(texto);
				document.write("<br>");
			};
			var imprimeLinha= function(qtd){
				for(var coluna=0;coluna<qtd;coluna++){				
					document.write("*");
				}
			};
			var imprimeTriangulo= function(event){
				var numero= parseInt(document.getElementById("numero").value);
				for(var linha=numero;linha>0;linha--){
					imprimeLinha(linha);
					document.write("<br>");
				}				
				event.preventDefault();
			};
			var botao= document.getElementById("ok");
			botao.onclick= imprimeTriangulo;
