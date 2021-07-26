function telephoneNumber(s){
    console.log(s.indexOf('8')!== -1);
    if(s.length >= 11 && s.indexOf('8') < (s.length - 10)&& s.indexOf('8') !== -1){
        return "YES"
    }else {
        return "NO"
    }
}

console.log(telephoneNumber('84444444445454545'))