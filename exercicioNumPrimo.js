			var imprime= function(texto){
				document.write(texto);
				document.write("<br>");
			};
			var ehDivisor= function(div,num){
				if(num%div==0){
					return true;
				}else{
					return false;
				}
			};
			var verificaPrimo= function(event){
				var numero= parseInt(document.getElementById("numero").value);
				for(var divisor=2;divisor<numero;divisor++){
					if(ehDivisor(divisor,numero)){
						imprime("Não é primo");
						break;
					}
				}	
				if(divisor==numero){
					imprime("É primo");
				}			
				event.preventDefault();
			};
			var botao= document.getElementById("ok");
			botao.onclick= verificaPrimo;
