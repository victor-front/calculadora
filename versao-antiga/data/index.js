function insert(n){ //Retornar o número clicado
	var num = document.getElementById('valor').innerHTML;
	document.getElementById('valor').innerHTML = num + n;
}

function cle(){//Limpar os dados
	document.getElementById('valor').innerHTML = '';
}

function back(){//Apagar um caractere
	var resultado = document.getElementById('valor').innerHTML;
	document.getElementById('valor').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calc(){//Calcular
	var resultado = document.getElementById('valor').innerHTML;
	if(resultado){
		document.getElementById('valor').innerHTML = eval(resultado);
	}
}