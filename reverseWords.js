

const str = "the   s ky   is     blue";

const reverseWords = (s) =>{
    let j = 0;
    let wordArr = [];
    let i = s.length-1;
    let reversedString = "";

    while(i>=0){
        if(s.charAt(i) !== " ") {
            if (s.charAt(i + 1) === "" || s.charAt(i + 1) === " ") {
                j = i
            }

            if(s.charAt(i-1) === " " || s.charAt(i-1)===""){
                wordArr.push(s.substring(i, j+1));
            }
        }

        i--;
    }

    if (wordArr.length > 0) {
            reversedString  = wordArr.join(" ");
    }

    return reversedString

}

console.log(reverseWords(str));

const reverseWordsWithJSBuiltIns = (str) =>{
     return str.trim().split(" ").filter((x)=> x!=="" ).reverse().join(" ");
}

console.log(reverseWordsWithJSBuiltIns(str));