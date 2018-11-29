var arrays = [[1, 2, 3], [4, 5], [6]];
// Мой код:
console.log(arrays.reduce((a, next_a) => {return a.concat(next_a)}));
// → [1, 2, 3, 4, 5, 6]