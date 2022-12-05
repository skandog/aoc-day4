

const puzzleInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

let puzzleInputArr = puzzleInput.split('\n');

let parsedPuzzleInputArr = []

for (let i = 0; i < puzzleInputArr.length; i++) {
    parsedPuzzleInputArr[i] = puzzleInputArr[i].split(',')
}



console.log(parsedPuzzleInputArr);
