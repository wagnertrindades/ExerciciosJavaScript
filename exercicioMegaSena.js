
			var imprime= function(texto){
				document.write(texto);
				document.write("<br>");
			};
			var sorteiaNumero= function(max){//Sorteia apenas 1 numero
				var numeroZeroUm= Math.random();
				var numeroZeroMaximo= numeroZeroUm*max;
				var secreto= Math.round(numeroZeroMaximo);
				return secreto;
			};
			var sorteiaMegaSena= function(qtd){//Sorteia quantos numeros forem digitados
				var qtdNumSortear= qtd;
				var numeroMaximo= 60;
				var numerosSorteados=[];
				for(i=0;i<qtdNumSortear;i++){
					var numeroSorteado= sorteiaNumero(numeroMaximo);
					if(numeroSorteado>0 && numeroSorteado!=numerosSorteados){
						numerosSorteados.push(numeroSorteado);
					}else{
						i--;
					}
				}
				return numerosSorteados;
			};
			var pegaNumerosEscolhidos= function(inputs){//Puxa os numeros que digitou para um Array
					var numEscolhidos=[];
					for(i=0;i<inputs.length;i++){
						numEscolhidos.push(parseInt(inputs[i].value));
					}
					return numEscolhidos;
			};
			var pegaUmNumeroSorteado= function(qtd,sorteados,escolhido){
				for(var i=0;i<qtd;i++){
					var umNumeroSorteado= sorteados[i];
					if(escolhido==umNumeroSorteado){
						imprime("Você acertou o numero: " + umNumeroSorteado);
					}
				}
			};
			var pegaUmNumeroEscolhido= function(inputs,qtd,sorteados){	
				for(var i=0;i<inputs.length;i++){
					var umNumeroEscolhido= inputs[i];
					var resultado= pegaUmNumeroSorteado(qtd,sorteados,umNumeroEscolhido);
				}
			};
			var geraInputs= function(event){//Gera os inputs para digitar os numeros para sortear
				var qtdNumSortear= parseInt(document.getElementById("numSortear").value);
				for(i=0;i<qtdNumSortear;i++){
					imprime("<form><label>Digite o numero : <input id='numero" + i +"'></label></form>");
				}
				imprime("<form><button id='sorteio'>Sortear</button></form>");
				var verificaNumerosAcertados= function(event){//Verifica se os numeros que digitou são iguais do sorteio
					var sorteados= sorteiaMegaSena(qtdNumSortear);
					var inputs= document.getElementsByTagName("input");
					var numEscolhidos= pegaNumerosEscolhidos(inputs);
					pegaUmNumeroEscolhido(numEscolhidos,qtdNumSortear,sorteados);
					imprime("Os numeros sorteados foram: " + sorteados);
					event.preventDefault();
				};
				var botaoSorteio= document.getElementById("sorteio");
				botaoSorteio.onclick= verificaNumerosAcertados;
				event.preventDefault();
			};
			var botao= document.getElementById("ok");
			botao.onclick= geraInputs;
