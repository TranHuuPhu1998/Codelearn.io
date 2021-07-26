function foulInFootball(a){
    let objResult = {};
    let rs = [];

    for(let i = 0 ; i < a.length ; i++){
        objResult[a[i]] = 0;
    }

    for(let i = 0 ; i < a.length ; i++){
        objResult[a[i]] = objResult[a[i]] + 1
    }
    
    let arrkey = Object.keys(objResult)

    for(let i=0 ; i < arrkey.length ; i++){
        if(objResult[arrkey[i]] >= 3){
            rs.push(Number(arrkey[i]))
        }
    }

    return rs;
}

console.log(foulInFootball([2,4,3,2,3,7,3,2]))


function foulInFootball(a){
    let arrset = [...new Set(a)]
    let rs = [];

    for(let j = 0 ; j < arrset.length ; j++) {
        let dem = 0 ;
        for(let i = 0 ; i < a.length ;i++){
            if(arrset[j] === a[i]){
                dem++;
            }
            if(dem >= 3){
                rs.push(arrset[j])
                dem=0;
            }
        }
    }

    return rs;
}

console.log(foulInFootball([2,4,3,2,3,7,3,2]))

