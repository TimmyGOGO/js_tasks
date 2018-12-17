var box = {
    locked: true,
    unlock: function() { this.locked = false; },
    lock: function() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Заперто!");
      return this._content;
    }
};

function withBoxUnlocked(body) {
    // Мой код:
    if ( box.locked == true ){
        box.unlock();
        try{
            body();    
        } finally{
            box.lock(); 
        }
    } else body();
    
}
   
withBoxUnlocked(function() {
    box.content.push("золотишко");
});
   
try {
    withBoxUnlocked(function() {
      throw new Error("Пираты на горизонте! Отмена!");
    });
} catch (e) {
    console.log("Произошла ошибка: ", e.name, e.message);
}
console.log(box.locked);
// → true

//призовая игра:
box.unlock();
console.log("Открыли коробку");
withBoxUnlocked( () => {
    box.content.push("Котан");
});
console.log( "Корбка: " + ( box.locked ? "закрыта" : "открыта" ) );
   