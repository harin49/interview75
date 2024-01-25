

const str1 = "TUXTUXTUX";
const str2 = "TUXTUXTUXTUXTUX";


const gcd = (n1, n2) =>{
    if (!n2){
        return n1
    }
    return gcd(n2, n1%n2)
}

const gcdOfStrings = (str1, str2) =>{
    if(str1+str2 !== str2+str1){
        return ""
    }

    if (str1 === str2){
        return str1
    }

    return str2.substring(0, gcd(str1.length, str2.length))
}
console.log(gcdOfStrings(str1, str2));