const lastDigit = (a,b) => {
    let num = a ** b;
    num = num + '';
    let res = [...num]
    return Number(num[num.length-1])
}

console.log(lastDigit(7,7))