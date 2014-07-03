
			var imprime= function(texto){
				document.write(texto);
				document.write("<br>");
			};
			var criaInputs= function(event){
				var numeroProvas=parseInt(document.getElementById("provas").value);
				var nota=1;
				while(nota<=numeroProvas){
					imprime("<form><label>Digite quanto você tirou na prova " + nota + ":<input id='"+ nota + "'></label></form>");
					nota++;
				}
				imprime("<form><button id='calcule'>Ok</button></form>");
				var calculaMedia= function(event){
					var nota=1;
					var somaNotas=0;
					while(nota<=numeroProvas){
						var notaAtual= parseFloat(document.getElementById(nota).value);
						somaNotas= somaNotas+notaAtual;
						nota++;
					}
					var media= somaNotas/numeroProvas;
					if(media<6){
						imprime("Você foi reprovado e sua média é: " + media.toFixed(2));
					}else{
						imprime("Você foi aprovado e sua média é: " + media.toFixed(2));
					}
					event.preventDefault();
				};
				var botao2=document.getElementById("calcule");
				botao2.onclick= calculaMedia;
				event.preventDefault();
			};
			var botao=document.getElementById("ok");
			botao.onclick= criaInputs;
