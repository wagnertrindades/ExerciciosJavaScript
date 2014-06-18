			var calculaInss= function(salario,desconto){
				var inss= (salario/desconto);
				return inss;
			};
			var imprime= function(texto){
				document.write(texto);
				document.write("<br>");
			};
			imprime("Exercicio Forum 17 <a href='http://forum.imasters.com.br/topic/465210-exercicios-para-iniciantes/' title='Clique aqui para ver o site do Forum' target='_blank'>Site Forum</a>");
			var salario= parseFloat(prompt("Qual seu salário?"));
			var desconto20= calculaInss(salario,20);
			var desconto25= calculaInss(salario,25); 
			var desconto30= calculaInss(salario,30);
			if(salario<600 || salario==600){
				imprime("Isento de desconto INSS.");
			}else if(salario>600 && (salario<1200 || salario==1200)){
				imprime("Desconto de: R$ " + desconto20.toFixed(2) + " ou seja 20%");
			}else if(salario>1200 && (salario<2000 || salario==2000)){
				imprime("Desconto de: R$ " + desconto25.toFixed(2) + " ou seja 25%");
			}else{
				imprime("Desconto de: R$ " + desconto30.toFixed(2) + " ou seja 30%");
			}
