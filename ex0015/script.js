function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert(`ERRO`)
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''// limpar selecao , antes de comeca a mostra a tabuada ele limpa 

        while( c <= 10){
            var item = document.createElement('option')// acrecentar opicoes por javascript e nao html usa essa tag item = document.creatElement('óption')

            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`// sentidos para outtras linguaguem para contagem de linha.
            tab.appendChild(item)
            c++

        }
    }
}