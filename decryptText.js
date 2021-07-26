function decryptText(s){
    let newArr = s.split('')
    let rs = [];
    let temp = 0;
    let sum = 0;

    for(let i=0;i<newArr.length;i++){
        
        sum = sum + temp;
        
        for(let j=0; j <= 25 ;j++){
            if((sum + j) % 26 === newArr[i].charCodeAt(0) - 97){
                temp = j
            }
        }
        
        rs.push(temp + 97)
    }
    return String.fromCharCode(...rs);
}