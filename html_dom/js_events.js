function changeColor(){
    let p = document.getElementById("pEvent")
    if (p.style.color === "blue")
        p.style.color = "red"
    else
        p.style.color = "blue"
}

function changeColor2(p){
    if (p.style.color === "blue")
        p.style.color = "red"
    else
        p.style.color = "blue"
}

function toUpperCase(p){
    p.innerHTML = p.innerHTML.toUpperCase()
}

function toLowerCase(p){
    p.innerHTML = p.innerHTML.toLowerCase()
}

function changeColor3(){
    let p = document.getElementById("p6")
    if (p.style.color === "blue")
        p.style.color = "red"
    else
        p.style.color = "blue"
}

const p6 = document.getElementById("p6")
// p6.addEventListener("click", changeColor3)
// p6.addEventListener("click", function (){
//     let p = document.getElementById("p6")
//     if (p.style.color === "blue")
//         p.style.color = "red"
//     else
//         p.style.color = "blue"
// })

p6.addEventListener("click", function (){
    changeColor2(p6)
})