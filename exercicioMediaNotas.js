var imprime= function(texto){
			document.write(texto);
			document.write("<br>");
		};
		var calculaNotas= function(nota1,nota2,nota3){
			var mediaNotas=(nota1+nota2+nota3)/3;
			console.log("Media das notas:" + mediaNotas);
			return mediaNotas;
		}
		var nomeAluno=prompt("Olá, Qual seu nome?");
		var nota1=parseInt(prompt(nomeAluno + ", Qual sua primeira nota?"));
		var nota2=parseInt(prompt("Qual sua segunda nota?"));
		var nota3=parseInt(prompt("E a sua terceira nota?"));
		var media=calculaNotas(nota1,nota2,nota3);
		imprime("<a href='http://forum.imasters.com.br/topic/465210-exercicios-para-iniciantes/' title='Clique para ir para o forum' target='_blank'>Site do Forum</a>");
		imprime("<hr>");
		if(media>6){
			imprime("<img src='http://t2.ftcdn.net/jpg/00/50/23/43/400_F_50234388_73M5qOv32OgW3jtgPf8KAJoBsR2yvPSt.jpg'>");
		}else if(media<4){
			imprime("<img src='http://2.bp.blogspot.com/-m05gk3chaTc/TcLTV-r2g4I/AAAAAAAAAnc/rA1SrQpt3x0/s1600/REPROVADO.jpg'>");
		}else{
			imprime("Marcar a prova final");
		}
