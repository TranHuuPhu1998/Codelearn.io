
const isPowerOfFour = (n) =>{
    let x = Math.log(n) / Math.log(4)
    if(x === 1){
        return true;
    }
    if(x % 2 === 0){
        return true;
    }else {
        return false;
    }
    let rs = Math.pow(4,x);
    if(rs === n){
        console.log("true")
        return true
    }else {
        console.log('false')
        return false
    }
}
isPowerOfFour(4)


const compareSumOfDigits = (input) => {
    let arrNumber = input.split('').map((item) => Number(item));
    let chan = 0;
    let le = 0;
    arrNumber.map((item) => {
        if(item %2 ===0){
            chan = chan + item
        }else {
            le = le + item
        }
    })
    return Math.abs(chan - le)
}

compareSumOfDigits('012345')

const maxSubarray=(inputArray)=>{
    let max = 0;
    let max2 = 0;
    let rs = [];
 
    inputArray.map((item,index)=>{
        if(max + item > max){
            rs.push(index)
        }
    })

    let end = rs[rs.length-1]
    let start = rs[0]
    
    for(let i = start ; i <= end; i++){
        max2 = max2 + inputArray[i]
    }

    return max2
  
}

maxSubarray([-1, 7, -2, 3, 4, 0, 1, -1])