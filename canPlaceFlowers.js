 const flowers = [0,0,0,0];
const n = 3;



const canPlaceFlowers = (flowerbed, n) =>{
    let count = 0;
    let length = flowerbed.length

    for(i=0;i<length;i++){
            if (flowerbed.length === 1 && flowerbed[0] === 0) {
                count++
            }

            if(flowerbed[0] === 0 && flowerbed[1] === 0){
                flowerbed[0] = 1;
                count++
            }

            if(flowerbed[length-1] === 0 && flowerbed[length-2] ===0){
                flowerbed[length-1] = 1;
                count++
            }

            if( flowerbed[i] + flowerbed[i-1]+flowerbed[i+1] === 0){
                flowerbed[i] = 1;
                count++
            }
    }

    console.log("===>", count >= n)
    console.log("===> flowerbed", flowerbed)
    return count >= n
};

 canPlaceFlowers(flowers, n)