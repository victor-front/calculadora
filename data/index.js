let etapa = 0;
let limite = 0;

function load(){
	for(c=0;c<=9;c++){
		document.getElementById('teclado').innerHTML += `
			<div class="botao" onclick="adicionar(${c})"><span>${c}</span></div>
		`;
	}
}

function adicionar(n){
	if(etapa == 0){
		if(limite >= 8){
			window.alert('limite.');
		}else{
			limite++;
			document.getElementById('saida').innerHTML += n;
			console.log(Number(document.getElementById('saida')));
		}
	}
}