function stringsort(s){
    return s.split(',').sort((a,b) => a > b ? 1 : -1)
}

console.log(stringsort("hello,my,name,is,code,learn"))
