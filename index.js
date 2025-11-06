/**
 * Write a function named twoSum that takes an array of integers `nums`
 * and an integer `target`, and returns the indices of the two numbers
 * such that they add up to `target`.
 *
 * Constraints:
 * - Exactly one valid solution exists for each input.
 * - You may not use the same element twice.
 * - Return the indices in any order.
 */

/* const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

};
*/

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}


// Example usage (commented out to avoid interference with tests)
// console.log(twoSum([2, 7, 11, 15], 9)); // → [0, 1]
// console.log(twoSum([3, 2, 4], 6));      // → [1, 2]
// console.log(twoSum([3, 3], 6));         // → [0, 1]

// Export the function for testing
module.exports = { twoSum };