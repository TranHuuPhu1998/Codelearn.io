const today = new Date();
const day = today.getDay();

const daylist = ["Chu Nhat","Thu Hai","Thu Ba","Thu Tu ","Thu Nam","Thu Sau","Thu Bay"];
let hour = today.getHours();

const minute = today.getMinutes();
const second = today.getSeconds();

let prepand = (hour >= 12) ? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;

console.log("🚀 ~ file: bai1.js ~ line 12 ~ hour", hour + prepand)


// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var today = new Date();
var day = today.getUTCDate();
var month = today.getUTCMonth();
var year = today.getUTCFullYear();

if(month < 10){
    month = "0" + month ;
}
if(day < 10){
    day = "0" + day ;
}
var one = `${month}-${day}-${year}`;

console.log("one", one)

/// giang sinh