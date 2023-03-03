function load(){
	for(c=0;c<=9;c++){
		document.getElementById('teclado').innerHTML += `
			<div class="botao" onclick="adicionar(${c})"><span>${c}</span></div>
		`;
	}
}