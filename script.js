for(var i = 0; i < 30; i++) {
    
    if(i % 5 === 0 && i % 3 === 0) {
        console.log('branch2');
    } else if(i % 5 === 0 ) {
        console.log('whew');
    } else if(i % 3 === 0) {
        console.log('blue');
    } else {
        console.log(i);
    }
    
}

console.log('palindrone');

function isPal(word) {
    var ogWord = word;
    if(ogWord === word.split('').reverse().join('')) {
       console.log('yes');
       } else {
           console.log('no');
       }
}

isPal('mom');
isPal('dad');
isPal('candy');
isPal('Jake');