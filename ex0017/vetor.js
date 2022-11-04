var valores = [5,8,6,3,7,4]
/*
for ( var pos=0 ; pos < valores.length ; pos ++){
    console.log(`a posicao ${pos} tem o valor ${valores[pos]}`)
}*/

for( var pos in valores ){
    console.log(` a posicao ${pos} tem o valor ${valores[pos]}` )
}