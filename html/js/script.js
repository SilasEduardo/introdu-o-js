// alert('ola mundo!')

// variaveis

// let variavel1 = 'variavel de bloco'
// var variavel2 = 'variavel de escopo'
// const variavel3 = 'variavel de escopo' 

// console.log(variavel1, variavel2, variavel3)

// // somas matematicas


// const a = 1;
// const b = 2;

// const soma = a + b;
// const div = a / b;
// const sub = a - b;
// const mult = a * b;


// console.log(soma, div, sub, mult);


// // par ou impar

// const n = 2;



// if(n % 2 === 0){
//     alert('Par');

// }

// else if(n !== Number){
//     alert( 'numero numero invalido');

// }else{
//     alert('impar');
// };


// // laços de repetição

// // let i = 0

// // while(i <= 4){
// //     alert('aqui while ' +i)
// //     i++
// // }


// // laço for

// for(var j = 0; j <= 4; j++){
//     alert('aqui e for ' +j)
// }


// const list = ['maça', 'Queijo', 123];


// for(var i = 0; i < list.length; i++){
//   alert(list[i])
// }


// função

function soma(a, b){
    return a + b
};

console.log(soma(7, 2));


function sub(a, b){
    console.log(a - b)
}

sub(5, 4)


function clicou(){
    alert('clicou no botão')
}



function mudaCor(cor){
    const text = document.getElementById('text')
    text.style.color = cor
}

function valida(){
 const nome =  document.getElementById('nome')
    if(nome.value === ''){
        alert('Campo vazio')
    }else{alert('enviado!')}
}


