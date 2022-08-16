let res = document.querySelector('.res')
let btn = document.querySelector('#btn')

let pe = document.querySelector('#ipedra').value
let pa = document.querySelector('#ipapel').value
let te = document.querySelector('#itesoura').value


/*
PEDRA = 1
PAPEL = 2
TESOURA = 3
*/






let ale = Math.floor(Math.random() * (4 - 1) + 1)
function jogo(){
    
    function pedra(){
        console.log(ale);
    
        if(pe){
            if(ale === 1){
                 res.innerHTML = 'empartado'
             } else if(ale === 2){
                 res.innerHTML = 'perdeu'
             } else if(ale === 3){
                 res.innerHTML = 'ganhou'
             }
          jogo()
        }
        
    }
}




function papel(){

    if(pa){
        if(ale === 1 ){
            res.innerHTML = 'ganhou'
        } else if(ale === 2){
            res.innerHTML = 'empartado'
        }else if(ale === 3){
            res.innerHTML = 'perdeu'
        }
    } 
}
function tesoura(){

    if(te){
        
        if(ale == 1){
            res.innerHTML = 'perdeu'
           
        } else if(ale == 2){
            res.innerHTML = 'ganhou'
          
        }else if(ale == 3){
            res.innerHTML = 'empartado'
           
        }
    }
}


    

    
    
    
  
    