//Мой код:
//Объявление класса в прототипном стиле:
//свойства в экземпляре классса, методы - в прототипе
function Vector(x, y){
    this.x = x;
    this.y = y;
}
  
//добавим через prototype:
//getter:
Object.defineProperty(Vector.prototype, "length", {
    get: function() { return Math.sqrt(this.x * this.x+ 
                                       this.y * this.y); }
});
  
//метод плюс:
Vector.prototype.plus = function(vec){
    return new Vector(this.x + vec.x,
                      this.y + vec.y);
}
  
//метод минус:
Vector.prototype.minus = function(vec){
    return new Vector(this.x - vec.x,
                      this.y - vec.y);
}
  
/*у нас получился "класс" Vector,
  который прототипно наследует getter и пару методов 
  от некоторого объекта Vector.prototype 
*/
  
//checking:
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5
  