function range(start, end, step){
    let array = [];
    //если step не задан:
    if (step == undefined || step == 0){
        step = 1;
    }

    let haltCond;
    //если step положительный:
    if (step > 0){
        haltCond = function(i){return i <= end;}
    } else{
        //если отрицательный:
        haltCond = function(i){return i >= end;}
    }

    for(let i = start; haltCond(i); i += step){
        array.push(i);
    }
    return array;
}

//первый вариант суммы эл-тов массива
function sum(array){
    let s = 0;
    for(let item of array){
        s += item;
    }
    return s;
}

//второй вариант sum:
function sum2(array){
    return array.reduce((elem, nextElem) => {return elem+nextElem});
}

console.log(sum(range(1, 10)));
// → 55
console.log(sum2(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]