https://codelearn.io/training/detail/2455896

function splitRange(arr){
    let temp = []; 
    let res = [];
    for(let i = 0 ; i < arr.length ; i++) {
        temp.push(arr[i]);
        if(arr[i]+1 === arr[i+1]){
            temp.push(arr[i]);
        }
        else if(temp) {
            if(temp.length > 1){
                let item = temp[0]+"->"+temp[temp.length-1];
                res.push(item);
                temp = []
            }else {
                let item = temp[0].toString();
                res.push(item);
                temp = []
            }
        }
    }


    return res; 
}

console.log(splitRange([0,1,2,4,5,7]))
