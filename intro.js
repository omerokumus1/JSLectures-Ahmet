// var i = 5;
// while (i < 10){
//     console.log(i);
//     i++;
// }

// i = 5
// for (let index = 0; index < 10; index++) {
//     console.log(index)

// }

// for-in
// when to use const: if you wont change the variable, then use const
// const arr = [1,2,3,4,5,6,7]
// for (const key in arr) {
//     console.log(key * 5)
// }

// Variable declaration
let x; // x is undefined
console.log(x)

// dynamic assignment
x = 5
console.log(x)

x = "str"
console.log(x)

// Re-declaring a variable with var
var k = 5
var k 
console.log("k is " + k )

let t = 3
t
console.log("t is " + t )


// Re-declaring a variable is not possible with let
let m = 3
// let m = 2 // not possible


// Block scope: {} iki süslü parantez içerisi block scope olur
// let keyword'ü block scope'ye sahiptir
var a = 3
let b = 5;
{ // free block
    let c = 3; // bu block dışında c'ye erişilemez
    while (c < 10){
            b += c
            c++
        }

    var d = 22; // d bu block dışında erişilebilir
}

// Re-declaring with block scope
let c = 22;
{
    let c = 2;
    console.log("c in block scope: "+ c )
    
}
console.log("c out of block scope: " + c)

f()

function f(){
    console.log("inside f, a is " + a)
}

add(1,2)
let result = add2(3,4)
console.log(result)

function add(n1, n2){
    let sum = n1+n2
    console.log(sum)
    
}


function add2(n1, n2){
    let sum = n1+n2
    return sum
}