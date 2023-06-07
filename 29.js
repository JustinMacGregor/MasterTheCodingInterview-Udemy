const nemo = ['nemo'];
const everyone = ['gill', 'dory', 'bruce', 'marlin', 'nemo', 'bloat', 'darla'];
const large = new Array(10000).fill('nemo');

function findNemo(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("running");
        if (arr[i] === 'nemo') {
            console.log('Found NEMO!');
            break;
        }
    }
}


const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1) --> Constant Time
    console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2)
findNemo(everyone); // O(n) --> Linear Time