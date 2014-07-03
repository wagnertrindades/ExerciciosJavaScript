var imprime= function(texto){
				document.write(texto);
				document.write("<br>");
			};
			var calculaSalarioBruto= function(ganho,horas){
				var salarioBruto= ganho*horas;
				return salarioBruto;
			};
			var calculaImpostoRenda= function(salarioBruto){
				var valorImpostoRenda= 11/100;
				var descontoImposto= salarioBruto*valorImpostoRenda;
				return descontoImposto;
			};
			var calculaInss= function(salarioBruto){
				var valorInss= 8/100;
				var descontoInss= salarioBruto*valorInss;
				return descontoInss;
			};
			var calculaSindicato= function(salarioBruto){
				var valorSindicato= 5/100;
				var descontoSindicato= salarioBruto*valorSindicato;
				return descontoSindicato;
			};
			var calculaSalLiquido= function(salarioBruto,ir,inss,sindicato){
				var salarioLiquido= salarioBruto-(ir+inss+sindicato);
				return salarioLiquido;
			};
			var verificaSalario= function(event){
				var ganhoPorHora= parseFloat(document.getElementById("porHora").value);
				var horasTrabalhadas= parseFloat(document.getElementById("horasTrabalhadas").value);
				var salarioBruto= calculaSalarioBruto(ganhoPorHora,horasTrabalhadas);
				var impostoRenda= calculaImpostoRenda(salarioBruto);
				var inss= calculaInss(salarioBruto);
				var sindicato= calculaSindicato(salarioBruto);
				var salarioLiquido= calculaSalLiquido(salarioBruto,impostoRenda,inss,sindicato);
				imprime("+Salário Bruto: R$ " + salarioBruto.toFixed(2));
				imprime("-IR (11%): R$ " + impostoRenda.toFixed(2));
				imprime("-Inss (8%): R$ " + inss.toFixed(2));
				imprime("-Sindicato (5%): " + sindicato.toFixed(2)); 
				imprime("=Salario Liquido: R$ " + salarioLiquido.toFixed(2));
				event.preventDefault();
			};
			var botao= document.getElementById("ok");
			botao.onclick= verificaSalario;
