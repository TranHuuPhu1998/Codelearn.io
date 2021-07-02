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