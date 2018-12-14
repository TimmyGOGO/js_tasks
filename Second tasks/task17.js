//ES5:
//Интерфейс обхода реализован классом:
function SlideThroughInterface(set){
    this.set = set;
    this.index = 0;
}

SlideThroughInterface.prototype.next = function(){
    if ( this.hasNext() ) {
        return this.set[this.index++];
    } else {
        return null;
    }
}

SlideThroughInterface.prototype.hasNext = function(){
    if ( this.index < this.set.length ) {
        return true;
    } else {
        return false;
    }
}

SlideThroughInterface.prototype.reset = function(){
    this.index = 0;
}

//Остальные объекты получены через наследование SlideThroughInterface
//объект-обертка для массива:
function ArraySeq(array){
    this.set = array;
    this.index = 0;
}

//наследование интерфейса:
ArraySeq.prototype = Object.create(SlideThroughInterface.prototype);

//объект-обертка для диапазона:
function RangeSeq(from, to){
    this.set = [];
    for ( var item = from; item <= to; item += 1 ){
        this.set.push(item);
    }
    this.index = 0;
}

//наследование интерфейса:
RangeSeq.prototype = Object.create(SlideThroughInterface.prototype);

//общая функция:
function logFive(setObj){
    for ( var i = 0; i < 5; i++){
        if ( setObj.hasNext() ) console.log( setObj.next() );
        else break;
    }
}

//checking:
logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104