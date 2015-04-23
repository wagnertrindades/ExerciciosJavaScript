function percorreArray(trsPacientes, comportamento){
	for(posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++){
		
		var pacienteAtual = trsPacientes[posicaoAtual];	

		comportamento(pacienteAtual);

	}
}