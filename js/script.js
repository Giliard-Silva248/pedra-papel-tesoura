let res = document.querySelector('.res')
let maquina = document.querySelector('.maquina')
/*
PEDRA = 1
PAPEL = 2
TESOURA = 3
*/
function pedra(){
    let pe = document.querySelector('#ipedra')
    
    let alePe = Math.floor(Math.random() * (4 - 1) + 1)
    if(pe){
        
        if(alePe == 1){
             res.textContent = `O RESULTADO: Você empatou!`
             maquina.innerHTML ='<img src="css/pedra.jpg" alt="">'
        }
        if(alePe == 2){
             res.textContent = `O RESULTADO: Você perdeu!`
             maquina.innerHTML ='<img src="css/papel.jpg" alt="">'
        }
        if(alePe == 3){
             res.textContent = `O RESULTADO: Você ganhou!`
             maquina.innerHTML ='<img src="css/tesoura.jpg" alt="">'
        }
    }
}
function papel(){
    let pa = document.querySelector('#ipapel')
    let alePa = Math.floor(Math.random() * (4 - 1) + 1)
    if(pa){
        if(alePa == 1){
             res.textContent = `O RESULTADO: Você ganhou!`
             maquina.innerHTML ='<img src="css/pedra.jpg" alt="">'
        }
        if(alePa == 2){
             res.textContent = `O RESULTADO: Você empatou!`
             maquina.innerHTML ='<img src="css/papel.jpg" alt="">'
        }
        if(alePa == 3){
             res.textContent = `O RESULTADO: Você perdeu!`
             maquina.innerHTML ='<img src="css/tesoura.jpg" alt="">'
        }
    }
}
function tesoura(){
    let te = document.querySelector('#itesoura')
    let aleTe = Math.floor(Math.random() * (4 - 1) + 1)
    if(te){
        if(aleTe == 1){
             res.textContent = `O RESULTADO: Você perdeu!`
             maquina.innerHTML ='<img src="css/pedra.jpg" alt="">'
        }
        if(aleTe == 2){
             res.textContent = `O RESULTADO: Você ganhou!`
             maquina.innerHTML ='<img src="css/papel.jpg" alt="">'
        }
        if(aleTe == 3){
             res.textContent = `O RESULTADO: Você empatou!`
             maquina.innerHTML ='<img src="css/tesoura.jpg" alt="">'
        }
    }
}
