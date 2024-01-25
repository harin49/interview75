

let word1 = "abcdef"
let word2 = "pqrs"


const mergeAlternately = (word1, word2) =>{

    const word1Length = word1.length;
    const word2Length = word2.length;

    let alternateStrings = ""
    const totalLength = word1Length + word2Length

    for (let i=0; i<totalLength; i++){
            if(!!word1[i]){
                alternateStrings+=word1[i]
            }

        if(!!word2[i]){
            alternateStrings+=word2[i]
        }

    }

    console.log("===> result", alternateStrings)
}

mergeAlternately(word1, word2);