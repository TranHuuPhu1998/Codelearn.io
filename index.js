
// const isPowerOfFour = (n) =>{
//     let x = Math.log(n) / Math.log(4)
//     if(x === 1){
//         return true;
//     }
//     if(x % 2 === 0){
//         return true;
//     }else {
//         return false;
//     }
//     let rs = Math.pow(4,x);
//     if(rs === n){
//         return true
//     }else {
//         return false
//     }
// }
// isPowerOfFour(4)


// const compareSumOfDigits = (input) => {
//     let arrNumber = input.split('').map((item) => Number(item));
//     let chan = 0;
//     let le = 0;
//     arrNumber.map((item) => {
//         if(item %2 ===0){
//             chan = chan + item
//         }else {
//             le = le + item
//         }
//     })
//     return Math.abs(chan - le)
// }

// compareSumOfDigits('012345')

// const maxSubarray=(inputArray)=>{
//     let max = 0;
//     let max2 = 0;
//     let rs = [];
 
//     inputArray.map((item,index)=>{
//         if(max + item > max){
//             rs.push(index)
//         }
//     })

//     let end = rs[rs.length-1]
//     let start = rs[0]
    
//     for(let i = start ; i <= end; i++){
//         max2 = max2 + inputArray[i]
//     }

//     return max2
  
// }

// maxSubarray([-1, 7, -2, 3, 4, 0, 1, -1])
// const isSortedArray = (arr) =>{
//     const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
//     let sort = [...arr];
//     arr = arr.sort((a,b) => a-b)
//     let rs = equals(sort,arr);
//     return rs;
// }

// isSortedArray([1, 1, 7, 9 , 11, 67, 89])

// const maxSumOfBeautifulSubarray = (array) => {
//     let sum = 0;
//     let max = 0;
//     let max2 = 0;
//     let rs = []
    
//     for(let i=0;i<array.length-1;i++){
//         sum = sum + array[i]
//         max = sum + array[i+1]
//         if(max > sum){
//             max = max + array[i+1]
//         }
//     }
   
// }

// maxSumOfBeautifulSubarray([-3,5,-4,7])


// -3 + 5 = 2 
// 2 - 4  = -2 (-2 , 2) breack
// 2 + 7  = 9

// const colorfulFlowers = (arr) =>{
//     let rs = new Set(arr)
//     console.log("🚀 ~ file: index.js ~ line 96 ~ colorfulFlowers ~ rs", rs)
// }

// colorfulFlowers([1, 2, 3, 4, 4, 5, 5, 6, 9, 10])

// const countPoints2 = (n) => {
//     var a = 1;
//     var sum = 1;
//     if(n == 0) return 0;
//     else if(n == 1) return 1;
//     for(var i=2; i<=n; i++){
//         a = a+3;
//         sum = a+sum;
//         console.log("🚀 ~ file: index.js ~ line 109 ~ countPoints2 ~ sum", sum)
//     }
//     return sum;
// }

// countPoints2(2)
// https://codelearn.io/training/detail/2520393
// const maxArray = (arr) => {
//     let max = 0 ; 
//     let dem = 0; 
//     let _index = -1; 
//     arr.forEach((element , index) => {
//         let x2 = element * 2;
//         if(x2 > max){
//             max = element;
//             _index = index;
//         }
//     });
//     arr.forEach((element , index) => {
//         if(max < element*2){
//             dem++;
//         }
//     });
//     if(dem >=2 ){
//         console.log('-1');
//         return -1;
//     }
//     console.log(_index);
//     return _index;
// }

// maxArray([1,2,3])

//https://codelearn.io/training/detail/7065030

// const minRemovals = (arr,k) => {
    
//     arr.sort((a,b) => a-b);

//     let ans = 10000000000000000000;
//     let l = 0 , r = 0 , len = arr.length;
//     for(r ; r < len ; r++ )
//     {
//         while((arr[r] - arr[l]) > k) l++;
//         ans = Math.min(ans , l + len - 1 - r);
//     }
//     return ans;
// }
    

// minRemovals([41,67,34,0,69,24,78,58,62,64,5,45,81,27,61,91,95,42,27,36,91,4,2,53,92,82,21,16,18,95,47,26,71,38,69,12,67,99,35,94,3,11,22,33,73,64,41,11,53,68],10)

// https://codelearn.io/training/detail/5785320

// const findSpecialNumber = (n) => {
//     let result = [0,1,2,2];

//     for(let i=3;i<=n;i++){
//         let countPoints = result[i]
//         while(countPoints--){
//             result.push(i)
//         }
//     }
    
//     return result[n];
// }
   

// console.log(findSpecialNumber(10))

// https://codelearn.io/training/detail/6723220

// const flipColor = (color,t) => {
//     let result = [...color]
//     let m = 0;
   
//     while(m < t.length){
//         let switchnumber = t[m]

//         result.forEach((element,index) => {
//             while(switchnumber < result.length){
//                 if(result[switchnumber] === 0){
//                     result[switchnumber] = 1
//                 }else if(result[switchnumber] === 1) {
//                     result[switchnumber] = 0
//                 }
//                 switchnumber++;
//             }
//         });
       
//         m++;
//     }
    
//     return result;
// }

// console.log(flipColor([1,0,0,1],[0,1,2,3]))

// console.log((1+1)%2)


// const twoSum = (nums,target) => {
    // let map = {}
    // for(let i = 0 ; i<nums.length ; i++) {
    //     var value = nums[i];
    //     var complementPair = target - value;
    //     if(map[complementPair] !== undefined) {
    //         return [map[complementPair] , i]
    //     }
    //     map[value] = i
    // }
// }

// console.log(twoSum([2,7,11,15],9))
// var countdown = function(value) {
//     if (value > 0) {
//         console.log("value 1" ,value);
//         return countdown(value - 1);
//     } else {
//         console.log("value 2" , value);
//         return value;
//     }
// };
// countdown(10);

// const generateParenthesis = (n) => {
//     const solution = [];
//     const generateCombo  = (leftPcount , rightPcount , partial) => {
       
//         if(leftPcount > rightPcount) return;
    
//         if(!leftPcount && !rightPcount){
//             solution.push(partial)
//             // return;
//         }
        
//         if(leftPcount > 0){
//             console.log("left",leftPcount,rightPcount);
//             generateCombo(leftPcount - 1, rightPcount , partial + '(');
            
//         }
//         if(rightPcount > 0){
//             console.log("right",leftPcount,rightPcount);
//             generateCombo(leftPcount , rightPcount - 1, partial + ')');
           
//         }
//     }
//     generateCombo(n , n, '');
//     return solution;
// }

// console.log(generateParenthesis(3))

// const removeElement = (nums,val) => {
//     for(let i = 0 ; i<nums.length ; i++) {
//         if(nums[i] === val){
//             nums.splice(i,1);
//             i--;
//         }
//     }
//     return nums;
// }

// console.log(removeElement([0,1,2,2,3,0,4,2],2))


// var titleToNumber = function(columnTitle) {
//     let res = 0;
//     let count = 0;

//     for(let i = columnTitle.length - 1 ; i >= 0  ; i--) {

//         let numberCode = columnTitle[i].charCodeAt(0) - 64;
//         res += Math.pow(26 , count++) * numberCode
        
//     }
//     return res;
// };

// console.log(titleToNumber("FXSHRXW"))

var minSwaps = function(arr) {
    let old = 0;
    let event = 0;
    for(let i = 0; i< arr.length ; i++){
        // chẵn
        if((i % 2 === 0 && arr[i] %2 === 0))
        {
            old ++;
        } 
        // lẽ
        if((i % 2 !== 0 && arr[i] % 2 !== 0)){
            event ++;
        }
    }


    if(old === event) {
        return old;
    } 
    if(old === 0 || event ===0 ) {
        return -1;
    }else {
        return -1;
    }

}

console.log(minSwaps([4,9,2,1,18,3,0]))
