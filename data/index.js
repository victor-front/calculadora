let etapa = 0;

function load(){
	for(c=0;c<=9;c++){
		document.getElementById('teclado').innerHTML += `
			<div class="botao" onclick="adicionar(${c})"><span>${c}</span></div>
		`;
	}
}

function adicionar(n, v, n2){
	let said = document.getElementById('saida').innerHTML;
	console.log(said);
	
	if(etapa == 0){
		if(said.length >= 8){
			n = Number(said);
			etapa = 1;
			console.log(n);
			console.log(typeof n);
		}else{
			document.getElementById('saida').innerHTML += n;
		}
	}
}