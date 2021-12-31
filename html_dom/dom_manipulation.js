const myp = document.getElementById("myp")
myp.innerHTML = "Hello world!"

const divsOfDemoClass = document.getElementsByClassName("demo")
divsOfDemoClass.item(0).innerHTML = "div1 to be changed"
divsOfDemoClass.item(1).innerHTML = "div2 to be changed"

const divLengthP = document.getElementById("divsLength")
divLengthP.innerHTML = divsOfDemoClass.length + ""

divLengthP.style.color = "red"
divLengthP.style.fontSize = "50px"

const div3 = document.getElementById("div3")

const p = document.createElement("p")
p.style.color = "black"
p.style.fontSize = "40px"
console.log(p.style.color)
console.log(p.style.fontSize)
div3.appendChild(p)
console.log(div3.innerHTML)


