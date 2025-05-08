/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let combined_array = nums1.concat(nums2);
    combined_array.sort(function(a, b){return a-b});
    console.log('combined_array', combined_array)

    // Even combined array length
    if(combined_array.length % 2 == 0){
        const first_num = combined_array[(combined_array.length / 2) - 1];
        const second_num = combined_array[combined_array.length / 2];

        return (first_num + second_num) / 2
    }
    else{
        return combined_array[Math.ceil(combined_array.length / 2) - 1]
    }
};

console.log(findMedianSortedArrays([1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15,16,17]));