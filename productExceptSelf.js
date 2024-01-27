


const nums = [1,2,3,4]



const productExceptSelf = (nums) =>{

    const prefixProductArray = [];
    const suffixProductArray = [];
    const answer =[];

    prefixProductArray[0] = 1;

    for (i=1;i<nums.length;i++){
        prefixProductArray[i] = prefixProductArray[i-1] * nums[i-1]
    }

    suffixProductArray[nums.length - 1] = 1;
    for (i=nums.length-2; i>=0; i--){
        suffixProductArray[i] = suffixProductArray[i+1]*nums[i+1]
    }

    for (i=0; i<nums.length; i++){
        answer[i] = prefixProductArray[i] * suffixProductArray[i]
    }

    return answer
}



console.log("===>", productExceptSelf(nums))

const productExceptSelfOptimized = (nums) =>{

    const productArr = [];

    productArr[0] = 1;

    for (i=1;i<nums.length;i++){
        productArr[i] = productArr[i-1] * nums[i-1]
    }

    let suffixProd = 1;
    for(i=nums.length-1; i>=0; i--){
        productArr[i] = productArr[i]*suffixProd
        suffixProd = suffixProd * nums[i]
    }

    return productArr
}

console.log("===>", productExceptSelfOptimized(nums))


