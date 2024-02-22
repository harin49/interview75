
const n = 5;


const climbStairs = (n) =>{
    let first = 1
    let second = 2

    if(n===1){
        return first;
    }

    for(i=3;i<=n;i++){
        let third = first + second;
        first = second;
        second = third;
    }

    return second;
}
console.log("===> ", climbStairs(4))

const memoArr = [];
const climbStairsRecursive = (n) =>{
    let first = 1
    let second = 2

    if(n===1){
        memoArr[0] = first;
        return first;
    }

    if(n===2){
        memoArr[1] = second;
        return second;
    }

    if(memoArr[n-1]){
        return memoArr[n-1]
    }

    memoArr[n-1] = climbStairsRecursive(n-1) + climbStairsRecursive(n-2);
    return memoArr[n-1]
}

console.log("===> ", climbStairsRecursive(4))
console.log("===> ", memoArr)