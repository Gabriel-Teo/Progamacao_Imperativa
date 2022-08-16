// 1.
!true; // Retorna False

//2.
!false; // Retorna True

//3.
!!false true; // Retorna False

//4.
!!true; // Retorna true

//5.
!1; // false

//6.
!!1; // true

//7.
!0; // true

//8.
!!0 // false

//9.
!!""; // false

//10.
let x = 5;
let Y = 9;
x < 10 && x !== 5; // false
x > 9 || x === 5; // true
!(x === y); // true

//11.
let x = 10;
let y = "a";
y==="b" || x >= 10; // true

//12.
let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y) // false

//13.
let str = ""
let msg = "haha!"
let eBonito = "false"
!((str || msg) && eBonito) // false