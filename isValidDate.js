function isValidDate(d,m,y){
    if(d < 0 || d > 31 || m < 0 || m > 12 || y < 0) return false
    

    if((y % 4 === 0 ) && (y % 100 !== 0) || (y % 400 === 0)){
        if(m === 2 && d === 29){
            return true
        }
    }else if(m === 2 && d > 28) {
        return false;
    }

    return true;
}

console.log(isValidDate(01,12,2021))