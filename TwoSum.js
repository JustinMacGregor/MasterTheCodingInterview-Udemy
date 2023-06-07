
var twoSum = function(nums, target) {
    var sortedNums = nums;
    sortedNums.sort(function(a, b){return a - b}); // O(2)
    var left = 0;
    var right = sortedNums.length;

    while (left < right) {
        var sum = sortedNums[left] + sortedNums[right];

        if (sum > target) {
            right--;
        } else if (sum < target) {
            left++;
        } else {
            return [nums.indexOf(sortedNums[left]), nums.indexOf(sortedNums[right])];
        }
    }
    return [];
};

twoSum([3,2,4], 6);