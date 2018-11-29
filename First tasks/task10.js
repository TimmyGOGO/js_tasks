//checking:
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

//functions' declaration:
//-------------------------------------------
function deepEqual(obj1, obj2){
    if (typeof obj1 == typeof obj2){
        if (typeof obj1 != "object"){ 
            return obj1 === obj2;
        } else if (obj1 == null || obj2 == null){
            return false;
        }else{ //оба объекта имеют тип "объект" и не равны null:
            let keys1 = Object.keys(obj1);
            let keys2 = Object.keys(obj2);

            let k1Len = keys1.length;
            let k2Len = keys2.length;

            if (k1Len != k2Len) return false;

            for (let i = 0; i < k1Len; i++){
                if (keys1[i] != keys2[i]) return false;
                else if (!deepEqual(obj1[keys1[i]], obj2[keys2[i]])){
                    return false;
                }
            }
            
            return true;

        }
    } else{ //объекты не могут быть равными, т.к. относятся к разным типам
        return false;
    }

}