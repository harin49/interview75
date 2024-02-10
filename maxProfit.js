const prices = [7,1,5,3,6,4]



const maxProfit = (prices) =>{
    let tempProfit = 0;
    for(i=0;i<prices.length - 1;i++){
        let j=i+1;

        while(j<prices.length){
            if(prices[j] - prices[i] > tempProfit){
                tempProfit = prices[j] - prices[i]
            }
            j++
        }
    }

    return tempProfit
}

// optimised approach O(n)


const maxProfitOptimised = (prices) =>{
    let lowestValue = Number.MAX_SAFE_INTEGER
    let profit = 0;

    for(let i=0;i<prices.length;i++){
        if(prices[i] < lowestValue){
            lowestValue = prices[i]
        }

        if(prices[i] - lowestValue > profit){
            profit = prices[i] - lowestValue
        }
    }

    return profit;
}

console.log("===>", maxProfitOptimised(prices));