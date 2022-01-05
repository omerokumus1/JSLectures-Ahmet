// split methodu: verilen bir stringi verilen bir karaktere göre parçalara ayırmak

let str = "JavaScript is far funnier than Java."
let delimiter = " "
console.log(splitString(str, delimiter))
console.log(findSubstring(str, "fff"))



function findSubstring(str, substring){
    let firstChar = substring[0]
    let substr
    for (let startIndex = 0; startIndex < str.length; startIndex++) {
        if (str[startIndex] === firstChar){
            substr = str.substr(startIndex, substring.length)
            if (substr === substring)
                return startIndex
        }
    }

    return -1
}

function splitString(str, delimiter) {
    let parts = []
    str += delimiter
    let startIndex = 0
    let singlePart = ""
    let endIndex = 0
    for (; endIndex < str.length; endIndex++) {
        if (str[endIndex] === delimiter) {
            singlePart = str.substring(startIndex, endIndex)
            if (singlePart.length !== 0)
                parts.push(singlePart)
            startIndex = endIndex + 1;
        }
    }
    // if (endIndex === str.length)
    //     parts.push(str.substring(startIndex, endIndex))
// -0 1 2 3 4 5 6 7 8 9 10 -0
    return parts
}


