		var calculaImc= function(peso,altura){
			var imc= peso/(altura*altura);
			return imc;
		};
		var imprime= function(texto){
			document.write(texto);
			document.write("<br>");
		};		
		var nome= prompt("Qual é o seu nome?");
		var altura= parseFloat(prompt(nome + ", Qual é sua altura?"));
		var peso= parseFloat(prompt(nome + "Qual é o seu peso?"));
		var imc= calculaImc(peso,altura);
		if(imc<18.5){
			imprime("Precisa engordar");
		}else if(imc>25){
			imprime("Precisa emagrecer");
		}else{
			imprime("Está no peso ideal");
		}
