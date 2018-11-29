//checking:
console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false

//Мой код:
//-----------------------------
function every(array, checkItem){
    for (let item of array){
        if ( !checkItem(item) ) return false;
    }

    return true;
}

function some(array, checkItem){
    for (let item of array){
        if ( checkItem(item) ) return true;
    }

    return false;
}

