function songuyento(n){
    if(n < 2) {
        return false;
    }
    for(let i= 2 ; i <= Math.sqrt(n) ; i++) {
        if(n % i == 0){
            return false;
        }
    }
    return true;
}
function smithNumber(n){

    if(n < 2){
        return false;
    }
    if(songuyento(n)) {
        console.log("false");
        return false;
    }
    let temp = n;
    let sum1 = 0;
    let sum2 = 0;
    
    for(let i = 2 ; i<= (n / 2); i++){

        if(temp % i == 0){
            let j = i;
            while(j > 0){
                sum1 += j%10
                j/=10;
            }
            temp /= i;
            i--;
        }
    }

    while(n > 0) {
        sum2 += n%10;
        n /= 10;
    }
    if(Math.round(sum1) == Math.round(sum2)) return true;
    else return false;
}

console.log(smithNumber(666))