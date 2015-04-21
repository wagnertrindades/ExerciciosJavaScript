var calculaPontos= function(vit,emp,der){
			var pontos= 3*vit+1*emp+0*der;
			return pontos;
		};
		var imprime= function(texto){
			document.write(texto);
			document.write("<br>");
		};		
		var nomeTimeA= prompt("Fale o nome do time A: ");
		var vitoriasA= parseInt(prompt("O " + nomeTimeA + " tem quantas vitórias?"));
		var empatesA= parseInt(prompt("Qual numero de empates do " + nomeTimeA + " ?"));
		var derrotasA= parseInt(prompt("Qual numero de derrotas do " + nomeTimeA + " ?"));
		var pontosA= calculaPontos(vitoriasA,empatesA,derrotasA);
		var nomeTimeB= prompt("Fale o nome do time B: ");
		var vitoriasB= parseInt(prompt("O " + nomeTimeB + " tem quantas vitórias?"));
		var empatesB= parseInt(prompt("Qual numero de empates do " + nomeTimeB + " ?"));
		var derrotasB= parseInt(prompt("Qual numero de derrotas do " + nomeTimeB + " ?"));
		var pontosB= calculaPontos(vitoriasB,empatesB,derrotasB);
		var nomeTimeC= prompt("Fale o nome do time C: ");
		var vitoriasC= parseInt(prompt("O " + nomeTimeC + " tem quantas vitórias?"));
		var empatesC= parseInt(prompt("Qual numero de empates do " + nomeTimeC + " ?"));
		var derrotasC= parseInt(prompt("Qual numero de derrotas do " + nomeTimeC + " ?"));
		var pontosC= calculaPontos(vitoriasC,empatesC,derrotasC);
		if(pontosA>pontosB && pontosA>pontosC && pontosB>pontosC){
			imprime("O " + nomeTimeA + " está ganhando.");
			imprime("O " + nomeTimeB + " é o segundo");
			imprime("O " + nomeTimeC + " é o terceiro.");
		}else if(pontosA>pontosB && pontosA>pontosC && pontosC>pontosB){
			imprime("O " + nomeTimeA + " está ganhando.");
			imprime("O " + nomeTimeC + " é o segundo");
			imprime("O " + nomeTimeB + " é o terceiro.");
		}else if(pontosB>pontosA && pontosB>pontosC && pontosA>pontosC){
			imprime("O " + nomeTimeB + " está ganhando.");
			imprime("O " + nomeTimeA + " está em segundo.");
			imprime("O " + nomeTimeC + " está em terceiro.");
		}else if(pontosB>pontosA && pontosB>pontosC && pontosC>pontosA){
			imprime("O " + nomeTimeB + " está ganhando.");
			imprime("O " + nomeTimeC + " está em segundo.");
			imprime("O " + nomeTimeA + " está em terceiro.");
		}else if(pontosC>pontosA && pontosC>pontosB && pontosA>pontosB){
			imprime("O " + nomeTimeC + " está ganhando.");
			imprime("O " + nomeTimeA + " está em segundo.");
			imprime("O " + nomeTimeB + " está em terceiro.");
		}else{
			imprime("O " + nomeTimeC + " está ganhando.");
			imprime("O " + nomeTimeB + " está em segundo.");
			imprime("O " + nomeTimeA + " está em terceiro.");
		}
