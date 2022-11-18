
let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100 ){
        return true
    }else{
        return false
    }
    

}

function islista(n, l){
    if(l.indexOf(Number(n)) != -1 ){
        return true
    } else {
        return false
    }
       

     
}



function adicionar() {
    if(isnumero(num.value) && !islista(num.value, valores)){
       /* valores.push() push é para adicioar um elemento em um vetor */
       valores.push(Number(num.value))
       let item = document.createElement('option')/* criar elemento option createlemnt */
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item)/* adicionar esse item */

    }else {
        window.alert(' Valor invalido ou ja encontrado na lista ')
    }
    num.value = ''/* para apagar caixa automaticamente  */
    num.focus()/* barrinha do cursor piscando */

}

function finalizar(){
    if (valores.length == 0){
       window.alert('bb')
    } else {
        let tot = valores.length

        res.innerHTML = ''
        res.innerHTML += `${tot}`

    }
}