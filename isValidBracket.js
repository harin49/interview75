

const s = "]["


const isValid = (s) =>{
    let arr1 = []
    let refMap = {
        ")":"(",
        "]": "[",
        "}": "{"
    }
    if(s.length%2 !== 0){
        return false
    }

    // for(i=0; i<s.length;i++){
    //     if (s.charAt(i) === "(" ||s.charAt(i) === "[" || s.charAt(i) === "{" ){
    //         arr1.push(s.charAt(i))
    //     }else if(arr1[arr1.length-1] === refMap[s.charAt(i)]){
    //         arr1.pop();
    //     } else{
    //         return false
    //     }
    // }

    // optimized
    
    for(i=0; i<s.length;i++){
        if(arr1.length > 0 && arr1[arr1.length-1] === refMap[s.charAt(i)]){
            arr1.pop();
        }else{
            arr1.push(s.charAt(i))
        }
    }



    return arr1.length === 0
}


console.log("===>", isValid(s));