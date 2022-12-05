var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var puzzleInput = "2-4,6-8\n2-3,4-5\n5-7,7-9\n2-8,3-7\n6-6,4-6\n2-6,4-8";
var puzzleInputArr = puzzleInput.split('\n');
var parsedPuzzleInputArr = [];
// turn hyphenated range into array of numbers
function range(s, f) {
    return __spreadArray([], Array(f - s + 1), true).map(function (e, i) { return i + s; });
}
// check if one array contained in another
var checker = function (arr, target) { return target.every(function (v) { return arr.includes(v); }); };
for (var i = 0; i < puzzleInputArr.length; i++) {
    parsedPuzzleInputArr[i] = puzzleInputArr[i].split(',');
    var rangeOneLow = Number(parsedPuzzleInputArr[i][0].charAt(0));
    var rangeOneHi = Number(parsedPuzzleInputArr[i][0].charAt(2));
    var rangeTwoLow = Number(parsedPuzzleInputArr[i][1].charAt(0));
    var rangeTwoHi = Number(parsedPuzzleInputArr[i][1].charAt(2));
    var rangeOne = range(rangeOneLow, rangeOneHi);
    var rangeTwo = range(rangeTwoLow, rangeTwoHi);
    console.log(checker(rangeOne, rangeTwo));
    console.log(checker(rangeTwo, rangeOne));
    console.log("----");
}
console.log(parsedPuzzleInputArr);
