function fizzBuzz(a, b) {
    let multiplo = (a, b) => a % b === 0;
    for (let i = 1; i <= 100; i++) {
        if (multiplo(i, a) && multiplo(i, b)) {
            console.log("fizzBuzz")
        } else if (multiplo(i, a)) {
            console.log("Fizz");
        } else if (multiplo(i, b)) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
console.log(fizzBuzz(23, 26))