//первоначальный вариант:
//Функция возвращает:
//true - четное, если n - четное
//false - нечетное, иначе.
function isEven(n){
    if (n == 0){
        return true;
    } else if (n == 1){
        return false;
    } else{
        return isEven(n-2);
    }
}

console.log("check 'isEven'");
console.log(isEven(50));
console.log(isEven(75));
try{
    console.log(isEven(-1));
} catch(e){
    console.log(e);
}

//при n == -1 - ломается: 
//превышается макисмальный размер контектсного стэка
//т.к. рекурсия никогда не остановится:
//функция не знает никаких значений, кроме 0 и 1

//исправленный вариант:
function isEvenEdited(n){
    if (n < 0){ //здесь фиксим случай с отриц.числом
        return isEvenEdited(-n);
    } else if (n == 0){
        return true;
    } else if (n == 1){
        return false;
    }else{
        return isEvenEdited(n-2);
    }
}

console.log("check 'isEvenEdited'");
console.log(isEvenEdited(50));
console.log(isEvenEdited(75));
console.log(isEvenEdited(-1));
