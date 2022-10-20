function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert(`erro`)
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10){

                img.setAttribute('src','imagens/criancaM.png' )

            } else if (idade < 21){

                img.setAttribute('src','imagens/jovemM.png' )

            } else if ( idade < 50){

                img.setAttribute('src','imagens/adultoM.png' )


            } else {

                img.setAttribute('src','imagens/idodoM.png' )

               }

        } else if (fsex[1].checked) {
            genero = 'feminino'
            if (idade >= 0 && idade < 10){

                img.setAttribute('src','imagens/criancaF.png' )


            } else if (idade < 21){

                img.setAttribute('src','imagens/jovemF.png' )

            } else if ( idade < 50){

                img.setAttribute('src','imagens/adultoF.png' )

            } else {
                
                img.setAttribute('src','imagens/idosaF.png' )

                
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `dectamos ${genero} e sua idade e ${idade}.` 
        res.appendChild(img)
    
   
    }
}
  

