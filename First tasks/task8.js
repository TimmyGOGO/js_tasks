/**
 * Return new array with the elements reversed from the given one
 * @param  {} array
 * @return {} reversedArray
 */
function reverseArray(array){
    let reversedArray = [];
    for (let item of array){
        reversedArray.unshift(item);
    }
    return reversedArray;
}

/**
 * Change the same array with the elements reversed
 * 
 * @param  {} array
 */
function reverseArrayInPlace(array){
    let n = array.length;
    //n/2^0 - целочисленное деление на 2
    for (let i = 0; i < n/2^0; i++){
        //меняем элементы местами:
        let tempVar = array[i];
        array[i] = array[n-1-i];
        array[n-1-i] = tempVar;
    }
}

//checking:
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


