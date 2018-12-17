function MultiplicatorUnitFailure() {
    this.name = "MultiplicatorUnitFailure";
}
 
function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}
 
function reliableMultiply(a, b) {
  // Мой код:
  let i = 0;
  do{
    console.log(`Итерация ${i}`);

    try{
        //специальная ошибка, чтобы мы ловили именно:
        //MultiplicatorUnitFailure()
        //выбросим неизвестную ошибку на 0ой итерации:
        if ( i == 0){
            throw new Error("Неизвестная ошибка");
        }
        let rez = primitiveMultiply(a, b);
        return rez;
    } catch(e){
        if ( e instanceof MultiplicatorUnitFailure ){
            console.log('Поймали ошибку: ' + e.name);
        } else {
            console.log('Поймали ошибку: ' + e.name);
        }
        
    } 
    i++;  
  } while(true);

}
 
console.log(reliableMultiply(8, 8));
// → 64