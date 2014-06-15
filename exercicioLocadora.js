    var qtdVideos=235;
		var valorLocacao=2.50;
		var valorMultaPorcento=10;
		var qtdMensalVideosAlugados= qtdVideos/3;
		var faturamentoAnual= (qtdMensalVideosAlugados*valorLocacao)*12;
		var multaAtraso= valorLocacao*(valorMultaPorcento/100);
		var multasMes= qtdMensalVideosAlugados/10;
		var faturamentoMensalMultas= multasMes*multaAtraso;
		var videosEstragaoPorcento=2;
		var qtdVideosEstragao= qtdVideos*(videosEstragaoPorcento/100);
		var videosReposicao= qtdVideos/10;
		var videosFinalAno= (qtdVideos-qtdVideosEstragao)+videosReposicao;
		var imprime= function(texto){
			document.write(texto);
			document.write("<br>");
		};
		var pula= function() {
			document.write("<hr><br>");
		};
		imprime("Se a locadora tem " + qtdVideos + " videos. E o valor por locação é de R$ " + valorLocacao.toFixed(2));
		imprime("E a quantidade de locações mensal é de " + Math.round(qtdMensalVideosAlugados) + " videos alugados");
		imprime("O ganho anual da locadora é de R$ " + faturamentoAnual.toFixed(2));
		pula();
		imprime("A cada atraso de locação a multa é de R$ " + multaAtraso.toFixed(2));
		imprime(" E cerca de " + Math.round(multasMes) + " multas são dadas por mês");
		imprime("O valor ganho com multas por mês é de R$ " + faturamentoMensalMultas.toFixed(2));
		pula();
		imprime("Sabendo que a quantidade de videos que estragam por ano é " + videosEstragaoPorcento + " %.E a quantidade de reaposição é " + Math.round(videosReposicao) + ".");
		imprime("No final do ano temos " + Math.round(videosFinalAno) + ".");
