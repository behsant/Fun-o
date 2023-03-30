/*function criarFrase(){
    console.log("frase 1")
    console.log("frase 2")
    console.log("frase 3")
}
//*tem que chamar, para ele aparecer no console//
criarFrase()*/


/*
function soma(n1,n2){
    console.log(n1 + n2)
    let total = n1+n2;
    return total;
    
}

console.log(`A soma é ${soma(5,5)}`)
*/

/*const soma = function(){}*/
/*const sum = () => {}   (outro metodo de chamar função)*/

/*function fazerSuco(fruta1,fruta2){
    console.log(`o suco é de ${fruta1} ${fruta2}`)
}

fazerSuco('banana', 'uva')*/


/*exercicio 1*/
function soma(n1,n2){
    console.log(n1+n2)
    let total = n1+n2;
    return total;
}

console.log(`A soma é ${soma(260,90)}`)

/*exercicio 2*/
function subtração(n3,n4){
    console.log(n3-n4)
    let total = n3-n4;
    return total;
}

console.log(`A subtração é ${subtração(689,9)}`)

/*exercicio 3*/
function multiplicação(n5,n6){
    console.log(n5*n6)
    let total= n5*n6;
    return total;
}

console.log(`A multiplicação é ${multiplicação(5,5)}`)

/*exercicio 4*/

function divisão(n7,n8){
    console.log(n7,n8)
    let total = n7/n8;
    return total ;
}

console.log(`A divisão é ${divisão(78,9)}`)

/*exercicio 5 */

    function informação(nome1,nome2){
        console.log (`o nome é ${nome1} ${nome2}`)
        
    }
    informação('Brenda', 'Santana')

    /*exercicio6*/

    function temp(n1){
        let divisão = n1 - 32;
        let resulatdo = divisão/1.8
        return resulatdo;
    }

    console.log(temp(15))

    /*exercicio 7*/
    function imc(peso,altura){
     area = peso/altura;
     return imc;
     
    }

    console.log(`o seu imc é ${imc(1.53,50)}`)

    /*exercicio8*/

    function valor(base,altura){
        area = base*altura;
        return area;

    }

    console.log(`A area é ${valor(20,60)}`)

    /*exercicio9*/
    function circulo(n1){
        area = Math.PI* n1*n1;
        return area;
    }

    console.log(`A area do circulo ${circulo(5)}`)