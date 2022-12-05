var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import puzzleInput from './input.js';
// console.log('puzzleInput :>> ', puzzleInput);
// const puzzleInput = `2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8`
var puzzleInputArr = puzzleInput.split('\n');
var parsedPuzzleInputArr = [];
// turn hyphenated range into array of numbers
function range(s, f) {
    return __spreadArray([], Array(f - s + 1), true).map(function (e, i) { return i + s; });
}
// check if one array contained in another
var checker = function (arr, target) { return target.every(function (v) { return arr.includes(v); }); };
var count = 0;
for (var i = 0; i < puzzleInputArr.length; i++) {
    parsedPuzzleInputArr[i] = puzzleInputArr[i].split(',');
    parsedPuzzleInputArr[i][0] = parsedPuzzleInputArr[i][0].split('-');
    parsedPuzzleInputArr[i][1] = parsedPuzzleInputArr[i][1].split('-');
    console.log('parsedPuzzleInputArr[i] :>> ', parsedPuzzleInputArr[i]);
    var rangeOneLow = Number(parsedPuzzleInputArr[i][0][0]);
    var rangeOneHi = Number(parsedPuzzleInputArr[i][0][1]);
    console.log('rangeOneLow :>> ', rangeOneLow, 'rangeOneHi :>> ', rangeOneHi);
    var rangeTwoLow = Number(parsedPuzzleInputArr[i][1][0]);
    var rangeTwoHi = Number(parsedPuzzleInputArr[i][1][1]);
    console.log('rangeTwoLow :>> ', rangeTwoLow, 'rangeTwoHi :>> ', rangeTwoHi);
    var rangeOne = range(rangeOneLow, rangeOneHi);
    var rangeTwo = range(rangeTwoLow, rangeTwoHi);
    console.log(checker(rangeOne, rangeTwo));
    console.log(checker(rangeTwo, rangeOne));
    console.log("----");
    if (checker(rangeOne, rangeTwo) || checker(rangeTwo, rangeOne)) {
        count += 1;
    }
}
console.log(count);
