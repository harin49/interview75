const nums1 = [1,2,3,0,0,0];
const m = 3;
const nums2 = [2,5,6];
const n = 3;

const merge = (nums1, m, nums2, n) =>{
    let nums1Cp = [];
    let p1 = 0;
    let p2 = 0;

    for(i=0; i<m;i++){
        nums1Cp[i] = nums1[i];
    }

    for(i=0;i<m+n;i++){
        if((p1<m && nums1Cp[p1]<nums2[p2]) || p2>=n){
            nums1[i] = nums1Cp[p1];
            p1++;
        }else{
            nums1[i] = nums2[p2];
            p2++;
        }
    }
}


console.log("===>", merge(nums1, m, nums2, n));