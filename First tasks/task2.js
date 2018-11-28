let n = 100;
for (let i = 1; i <= n; i++){
    if (i % 3 == 0){
        if (i % 5 == 0){ //делится и на 3, и на 5
            console.log(i + ' FizzBuzz'); 
        } else { //делится только на 3
             console.log(i + ' Fizz');
        }
    } else if (i % 5 == 0){ //делится только на 5
        console.log(i + ' Buzz');
    }
}