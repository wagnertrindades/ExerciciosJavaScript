      var imprime= function(texto){
				document.write(texto);
				document.write("<br>");
			};
			var geraMedia= function(event){
				var media=0;
				var notas=[];
				var inputs= document.getElementsByTagName("input");
				for(var andar=0;andar<inputs.length;andar++){
					notas.push(parseFloat(inputs[andar].value));
				}				
				for(var i=0;i<notas.length;i++){
					media += notas[i];
				}
				media /= notas.length;
				imprime(media.toFixed(2));
				event.preventDefault();
			};
			var botao= document.getElementById("calcula");
			botao.onclick= geraMedia;
