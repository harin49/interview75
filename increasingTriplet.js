
const nums = [1,1,1,1]
const increasingTriplet = (nums) =>{
    let firstNum = Infinity;
    let secondNum = Infinity;
    let i=0;
    let isIncreasingTriplet = false;

    while(i<nums.length){
        if (nums[i]<=firstNum){
            firstNum = nums[i]
        } else if(nums[i]<=secondNum){
            secondNum = nums[i]
        }else{
            isIncreasingTriplet = true
        }

        i++
    }

    return isIncreasingTriplet;
}


console.log("===>", increasingTriplet(nums))