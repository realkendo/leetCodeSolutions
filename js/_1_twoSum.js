/*

1. Two Sum - Easy

Hint
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution,
and you may not use the same element twice.

You can return the answer in any order.

*/

//two sum function
const twoSum = (myArray, myTarget) => {
  // looping through the array for result
  for (let i = 0; i < myArray.length; i++) {
    for (let j = i + 1; j < myArray.length; j++) {
      if (myArray[i] + myArray[j] === myTarget) {
        return [i, j];
      }
    }
  }
  return;
};

// assigning values for test cases
const arr = [2, 3, 4, 5, 6];
const tar = 7;
console.log(twoSum(arr, tar));

// the above solution has a bigO complexity of O(n^2) because fo the loop inside of a loop

const twoSumRevised = (arrayInput, targetInput) => {
  for (let i = 0; i < arrayInput.length; i++) {
    for (let j = i + 1; j < arrayInput.length; j++) {
      if (arrayInput[j] + arrayInput[i] === targetInput) {
        return [i, j];
      }
    }
  }
};

console.log(twoSumRevised([2, 4, 5, 6], 8));
