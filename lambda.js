// Standard function definition and implementation
function f(a){
    console.log("a is " + a)
}

// Anonymous function
let myf = function (a){
     console.log("a is " + a)
}

a => console.log("a is " + a);

(a, b) => a+b;

function f(a,b){
    return a+b;
}

() => console.log("no arg lambda");

f(3, 5);

let myLambda = (a, b) => {
    console.log("myLambda is called with " + a + ", " + b);
}

myLambda(3,5);

let lambda = (a, b) => console.log("lambda passed to lambdaExample function: " + (a+b));
lambdaExample(lambda)


function lambdaExample(lambda){
    lambda(1,2)
}

// A firmasının kodu
let l = () => console.log("A firmasının kodu");
download("fakeurl.com", l)

// B firmasının kodu
l = () => console.log("B firmasının kodu");
download("fakeurl.com", l)

function download(url, lamb){
    let response = false
    if (response){
        // saveFile
    }
    else{
        lamb()
    }
}