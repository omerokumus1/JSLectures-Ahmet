let json = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
}
let jsonArr = [0,1,2,32,4,5,6,7,8]
let c = 0
for(let key in json){
    if (json[key] === jsonArr[c])
        console.log("key: " + key + ", value: " + json[key])
    c++
}

let jsonKeys = Object.keys(json)
let key
for (let i = 0; i < jsonKeys.length; i++) {
    key = jsonKeys[i]
    if (json[key] === jsonArr[i])
        console.log("key: " + key + ", value: " + json[key])

}
