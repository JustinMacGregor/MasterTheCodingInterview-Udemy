/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length == 1) { // if there is only one element
        return nums[0];
    }

    var leftIndex = 0;
    var rightIndex = leftIndex + 1;
    var largestValue = nums[0];
    var sum = nums[0];

    while (rightIndex < nums.length) { // iterate until the end of the array
        sum = Math.max(nums[rightIndex], sum + nums[rightIndex]); // update sum

        if (sum > largestValue) {
            largestValue = sum;
        }

        if (nums[rightIndex] > sum) {
            leftIndex = rightIndex;
        }

        rightIndex++;
    }

    return largestValue;
};
