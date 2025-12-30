"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSumFunction = void 0;
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
