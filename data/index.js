function insert(n){
    var num = document.querySelector('.valor').innerHTML;
    document.querySelector('.valor').innerHTML = num + n;
}

function cle(){
    document.querySelector('.valor').innerHTML = '';
}

function back(){
    var resultado = document.querySelector('.valor').innerHTML;
    document.querySelector('.valor').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calc(){
    var resultado = document.querySelector('.valor').innerHTML;
    if(resultado){
        document.querySelector('.valor').innerHTML = eval(resultado);
    }
}