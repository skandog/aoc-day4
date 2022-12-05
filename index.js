var puzzleInput = "2-4,6-8\n2-3,4-5\n5-7,7-9\n2-8,3-7\n6-6,4-6\n2-6,4-8";
var puzzleInputArr = puzzleInput.split('\n');
var parsedPuzzleInputArr = [];
for (var i = 0; i < puzzleInputArr.length; i++) {
    parsedPuzzleInputArr[i] = puzzleInputArr[i].split(',');
}
console.log(parsedPuzzleInputArr);
