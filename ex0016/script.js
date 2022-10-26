function contar(){
var inicio = document.getElementById('txti')
var fim = document.getElementById('txtf')
var passo = document.getElementById('txtp')
var res = document.getElementById('res')

if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert( `ERRO falta dados`)
} else {
    res.innerHTML = `contando...<br>`
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if ( p <= 0){
        window.alert(`passo invalido! considerando PASSO 1`)
        p = 1
    }


   if( i < f) {
    // contagem crescente
    for(var c = 1 ; c <= f ; c +=p ){
        res.innerHTML +=   `${c} \u{1F449} `
       } 
   }else{
    // contagem regressiva
    for(var c = 1 ; c >= f ; c -= p){
        res.innerHTML += `${c} \u{1F449}`
    }
    res.innerHTML += `\u{1F3C1}`
   }
   
 
  
 }

}