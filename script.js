const coeffA = document.querySelector('.coeff-a');
const coeffB = document.querySelector('.coeff-b');
const coeffC = document.querySelector('.coeff-c');
const buttonEquation = document.querySelector('.button-equation');
const resultEquationSquare = document.querySelector('.result-equation-square');

const numberOne = document.querySelector('.number-one');
const numberTwo = document.querySelector('.number-two');
const numberThree = document.querySelector('.number-three');
const buttonMax = document.querySelector('.button-max');
const resultNumberMax = document.querySelector('.result-number-max');


const number = document.querySelector('.number');
const rank = document.querySelector('.rank');
const buttonNumberRank = document.querySelector('.button-number-rank');
const resultNumberRank = document.querySelector('.result-number-rank');

//Функция нахождения корней квадратного уравнения
function rootsOfEquationSquare(a, b, c){
    var x = [];
    var d = b*b - 4*a*c;
    
    if(d>0){
        x.push((-b+Math.sqrt(d))/(2*a));
        x.push((-b-Math.sqrt(d))/(2*a));        
    }else if(d==0){
        x.push(-b/(2*a));
    }else{
        x.push('Корней нет');
    }
    return x;
}

//Определить какое из трех введенных пользователем чисел максимальное
function maxNumberOfThree(a, b, c){
    if(a>=b && a>=c){
        return a;
    }else if(b>=a && b>=c){
        return b;
    }else 
        return c;
}

//Возведение в степень
function expNumberInRank(x, n){
    var rez = x;
    for(var i = 1; i<n; i++){
        rez *= x;
    }
    return rez;
}

buttonEquation.addEventListener('click', function(e){
    var roots = rootsOfEquationSquare(parseInt(coeffA.value), parseInt(coeffB.value), parseInt(coeffC.value));
    if(roots.length==2) 
        resultEquationSquare.innerHTML = `x<sub>1</sub>=${roots[0]} x<sub>2</sub>=${roots[1]}`;
    else
        resultEquationSquare.innerHTML = `${roots[0]}`;
});

buttonMax.addEventListener('click', function(e){
    resultNumberMax.innerHTML = `${maxNumberOfThree(parseInt(numberOne.value), parseInt(numberTwo.value), parseInt(numberThree.value))} - максимальное число`;
});

buttonNumberRank.addEventListener('click', function(e){
    var x = parseInt(number.value);
    var n = parseInt(rank.value);
    resultNumberRank.innerHTML = `${x}<sup>${n}</sup> = ${expNumberInRank(x,n)}`;
});


