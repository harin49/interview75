// Revisit the problem one day!!!!!





// const stringCompress = (chars) =>{
//     let s ="";
//     let tempChar = "";
//     let charCount = 0;
//
//     for(i=0;i<chars.length; i++){
//         if(i===0){
//             tempChar = chars[0];
//         }
//
//         if(tempChar !== chars[i]){
//             if(charCount>1){
//                 s += tempChar+charCount
//             }else if(charCount === 1){
//                 s+=tempChar
//             }
//
//             tempChar = chars[i]
//             charCount = 1;
//         }else{
//             charCount++
//         }
//
//         if(i === chars.length - 1){
//             if(charCount>1){
//                 s += tempChar+charCount
//             }else if(charCount === 1){
//                 s+=tempChar
//             }
//         }
//     }
//
//     const sArray = s.split('');
//
//     sArray.forEach((item, index) =>{
//         chars.splice(index, 1, item)
//     })
//
//
//     return sArray.length
// }
//
// console.log("===>", stringCompress(c))

const c = ["a","a","b","b","c","c","c"];


const stringCompress = (chars) => {
    let s = "";
    let groupLength = 0;
    let i = 0;
    while (i < chars.length) {
        let j = i;
        while (j < chars.length) {
            if (chars[j] === chars[i]) {
                groupLength++;
                j++;
            }

            if(chars[j] !== chars[i] || j === chars.length){
                s += chars[i]
                if (groupLength > 1) {
                    s += groupLength
                }
                groupLength = 0;
                i = j
                break;
            }
        }
    }

    const sArray = s.split('');

    sArray.forEach((item, index) =>{
        chars.splice(index, 1, item)
    })

    return sArray.length
}

console.log("===>", stringCompress(c))