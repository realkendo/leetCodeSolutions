"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSumFunctionOptimized = exports.twoSumFunction = void 0;
const twoSumFunction = (inputArray, inputTarget) => {
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            if (inputArray[i] + inputArray[j] === inputTarget) {
                return [i, j];
            }
        }
    }
    return [];
};
exports.twoSumFunction = twoSumFunction;
console.log((0, exports.twoSumFunction)([3, 4, 5], 8));
const twoSumFunctionOptimized = (arrayNums, targetNum) => {
    let seen = {};
    for (let i = 0; i < arrayNums.length; i++) {
        const complement = targetNum - arrayNums[i];
        if (seen[complement] !== undefined) {
            return [seen[complement], i];
        }
        seen[arrayNums[i]] = i;
    }
    return [];
};
exports.twoSumFunctionOptimized = twoSumFunctionOptimized;
console.log((0, exports.twoSumFunctionOptimized)([3, 4, 5], 8));
//# sourceMappingURL=_1_twoSum.js.map