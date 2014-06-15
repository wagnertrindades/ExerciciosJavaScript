		var imprime=function(texto){
			document.write(texto);
			document.write("<br>");
		};
		var nome=prompt("Olá, Qual seu nome?");
		var idade=parseInt(prompt(nome + ", qual é a sua idade?"));
		if(idade>18 && idade>65){
			imprime(nome + ", você é maior de idade e maior que 65 anos.");
		}else if(idade>18){
			imprime(nome + ", você é maior de idade.");
		}else if(idade<18 && idade<12){
			imprime(nome + ", você é menor de idade e tem menos de 12 anos.");
		}else{
			imprime(nome + ", você é menor de idade.");
		}
