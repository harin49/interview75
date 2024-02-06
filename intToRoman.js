// Pending.


const n = 1994



const intToRoman = (num) =>{
    let romanStr = ""
    values = {
        1000: "M",
        900 :"CM",
        500: "D",
        400 : "CD",
        100: "C",
        90: "XC",
        50: "L",
        40 : "XL",
        10 : "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I",
    }

    for(let i=0; i<Object.keys(values).length && num > 0; i++) {
        while(Object.keys(values)[i] <= num){
                num = num - values[key];
                romanStr += values[key];
        }
    }

    return romanStr
}



console.log("===>",intToRoman(n));