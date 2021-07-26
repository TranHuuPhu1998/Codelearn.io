const alligator = ["thick scales", 80, "4 foot tail", "rounded snout"];
let check = alligator.find(el => el.length < 12); // returns '4 foot tail' 
let rs = alligator.indexOf("rounded snout",4); // returns 3
console.table(alligator.indexOf(80, 2)) // return -1

function checkMax(str){
    return Math.max(...str.split('').map((item) => item.charCodeAt()))
}

console.log(checkMax("abc")) // return 99




