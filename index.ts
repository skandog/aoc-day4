import puzzleInput from './input.js'

// console.log('puzzleInput :>> ', puzzleInput);

// const puzzleInput = `2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8`

let puzzleInputArr = puzzleInput.split('\n');

let parsedPuzzleInputArr = []

// turn hyphenated range into array of numbers
function range(s,f){
    return [...Array(f-s+1)].map((e,i)=>i+s)
}

// check if one array contained in another
let checker = (arr, target) => target.every(v => arr.includes(v));

let count = 0;

for (let i = 0; i < puzzleInputArr.length; i++) {
    parsedPuzzleInputArr[i] = puzzleInputArr[i].split(',')
    parsedPuzzleInputArr[i][0] = parsedPuzzleInputArr[i][0].split('-')
    parsedPuzzleInputArr[i][1] = parsedPuzzleInputArr[i][1].split('-')
    console.log('parsedPuzzleInputArr[i] :>> ', parsedPuzzleInputArr[i]);

    let rangeOneLow =  Number(parsedPuzzleInputArr[i][0][0])
    let rangeOneHi =  Number(parsedPuzzleInputArr[i][0][1])
    console.log('rangeOneLow :>> ', rangeOneLow, 'rangeOneHi :>> ', rangeOneHi);
    let rangeTwoLow =  Number(parsedPuzzleInputArr[i][1][0])
    let rangeTwoHi =  Number(parsedPuzzleInputArr[i][1][1])
    console.log('rangeTwoLow :>> ', rangeTwoLow, 'rangeTwoHi :>> ', rangeTwoHi);
    let rangeOne =  range(rangeOneLow, rangeOneHi)
    let rangeTwo =  range(rangeTwoLow, rangeTwoHi)
    

    console.log(checker(rangeOne, rangeTwo));
    console.log(checker( rangeTwo, rangeOne));
    console.log("----");

    if (checker(rangeOne, rangeTwo) || checker( rangeTwo, rangeOne)) {
        count += 1;
    }
}



console.log(count);
