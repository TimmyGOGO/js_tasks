//checking:
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

//functions' declaration:
//-------------------------------------------
function arrayToList(array){
    if (array.length == 0){
        return {value: null, rest: null};
    }

    //заполним первый элемент:
    let list = {value: array[0], rest: null};

    let currNode = list;
    for (let i = 1; i < array.length; i++){
        currNode.rest = {value: array[i], rest: null};
        currNode = currNode.rest;
    }

    return list;
}

function listToArray(list){
    let array = [];
    let currNode = list;

    while (currNode != null){
        array.push(currNode.value);
        currNode = currNode.rest;
    }

    return array;
}

function prepend(item, list){
    return {value: item, rest: list};
}

function nth(list, nodePos){
    if (nodePos < 0 || list == null) return undefined;
    if (nodePos == 0) return list.value;
    else return nth(list.rest, nodePos-1);
}

