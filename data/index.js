let etapa = 0;

function load(){
	for(c=1;c<=9;c++){
		document.getElementById('teclado').innerHTML += `
			<div class="botao" onclick="adicionar(${c})"><span>${c}</span></div>
		`;
	}
	document.getElementById('teclado').innerHTML += `
		<div class="botao" onclick="adicionar(0)"><span>0</span></div>
	`;
}

function adicionar(n){
	if(n == "c"){
		document.getElementById('saida').innerHTML = '';
		etapa = 0;
	}else{
		let said = document.getElementById('saida').innerHTML;
		if(etapa == 0){
			if(said.length >= 8){
				n1 = Number(said);
				etapa = 1;
			}else if(said.length <= 0){
				document.getElementById('saida').innerHTML = n;
				n1 = Number(said);
				console.log(n1);
			}else{
				document.getElementById('saida').innerHTML += n;
				n1 = Number(said);
				console.log(n1);
			}
		}
	}
}