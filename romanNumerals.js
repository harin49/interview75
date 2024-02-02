

const n = "CXVII"


// const romanToInt = (s) =>{
//     values = {
//         "I": 1,
//         "V": 5,
//         "X": 10,
//         "L": 50,
//         "C": 100,
//         "D": 500,
//         "M": 1000,
//         "IV": 4,
//         "IX": 9,
//         "XL": 40,
//         "XC": 90,
//         "CD": 400,
//         "CM": 900
//     }
//
//     let totalSum = 0;
//     let i = 0;
//
//     while(i<s.length){
//         if(i < s.length - 1){
//             let doubleSymbol = s.substring(i, i+2);
//
//             if(!!values[doubleSymbol]){
//                 totalSum += values[doubleSymbol];
//                 i += 2
//                 continue
//             }
//         }
//
//         let singleSymbol = s.substring(i, i+1);
//
//         if(!!values[singleSymbol]){
//             totalSum += values[singleSymbol];
//             i += 1
//         }
//     }
//
//     return totalSum;
//
// }
//
//
// console.log("===>", romanToInt(n))


const romanToInt2 = (s) =>{
    values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let totalSum = 0;
    let i = 0;

    while(i<s.length){

        if(values[s[i]] < values[s[i+1]]){
            totalSum += values[s[i+1]] - values[s[i]]
            i += 2
        }else{
            totalSum += values[s[i]]
                i += 1
        }
    }

    return totalSum;

}


console.log("===>", romanToInt2(n))