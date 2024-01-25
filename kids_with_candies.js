

const candies = [2,3,5,1,3]
const extraCandies = 3
const kidsWithCandies = (candies, extraCandies) =>{
    let highestCandieCountInArray = 0;
    let result = [];
    let candiesLength = candies.length

    for(i=0; i<candiesLength; i++){
        if( candies[i]>highestCandieCountInArray){
            highestCandieCountInArray = candies[i]
        }
    }

    for(i=0; i<candiesLength; i++){
        const extraCandiesCount = candies[i] + extraCandies;
            result[i] = extraCandiesCount >= highestCandieCountInArray
    }

    return result
}

kidsWithCandies(candies, extraCandies)