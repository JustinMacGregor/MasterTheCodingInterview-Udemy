const nemo = ['nemo'];

function findNemo(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}

findNemo(nemo);