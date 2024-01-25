
const str = "eio"

const checkVowels = (c) =>{

    return
}

const reverseVowels = (s) =>{
const indexArray = [];
const strArray = s.split("");
const vowels = "aeiouAEIOU"

    strArray.forEach((item, index)=>{
        if(vowels.includes(item)){
                    indexArray.push(index)
        }
    })

    for (i=0, j=indexArray.length-1;i<indexArray.length, j>=i;i++,j--){
        if(i===j){
            continue
        }

        let temp
        temp = strArray[indexArray[i]]
        strArray[indexArray[i]] = strArray[indexArray[j]]
        strArray[indexArray[j]] = temp
    }

    return strArray.join("")
}

console.log(reverseVowels(str));