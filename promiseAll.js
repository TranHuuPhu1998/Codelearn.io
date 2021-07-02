// var urls = ['http://127.0.0.1:5500/index.html', 'http://127.0.0.1:5500/index.html', 'http://127.0.0.1:5500/index.html'];

// var promises = urls.map(url => fetch(url).then(y => y.url));

// Promise.all(promises).then(results => {
//     console.log(results)
// });

// function splitRange(arr){
//     let temp = []; 
//     let res = [];
//     for(let i = 0 ; i < arr.length ; i++) {
//         temp.push(arr[i]);
//         if(arr[i]+1 === arr[i+1]){
//             temp.push(arr[i]);
//         }
//         else if(temp) {
//             if(temp.length > 1){
//                 let item = temp[0]+"->"+temp[temp.length-1];
//                 res.push(item);
//                 temp = []
//             }else {
//                 let item = temp[0].toString();
//                 res.push(item);
//                 temp = []
//             }
//         }
//     }


//     return res; 
// }

// console.log(splitRange([0,1,2,4,5,7]))


function stringDuplicate(str){
    let ArrayString = str.split("");
    let newArrar = Array.from(new Set([...ArrayString]));
    let obj = {};
    for(let i = 0 ; i < newArrar.length ; i++) {
        obj[newArrar[i]] = 0;
        for(let j = 0 ; j < ArrayString.length ; j++) {
            if(newArrar[i] == ArrayString[j]){
                obj[newArrar[i]] = obj[newArrar[i]] + 1;
            }
        }
    }
    let _value = Object.values(obj);
    let newSetValue = Array.from(new Set(_value))
    let res = (_value.length - 1) + ( Math.max(..._value) / Math.min(..._value));
    if(Math.max(..._value) === 1 || newSetValue.length >= 3){
        return -1;
    }
    return res;
}

console.log(stringDuplicate("jwzulmyzbrfjafxjzvsn"))