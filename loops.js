function forLoop(array) {
    for (var i = 0; i < 25; i++) {
        array.push(`I am ${i} strange loops.`);
    }
    return array;
}

function whileLoop(n) {
    var end = "done";
    while (n > 0) {
        console.log(--n);
    }
    return end;
}


function doWhileLoop(array) {
    function maybeTrue() {
      return Math.random() >= 0.5 ;// Returns a random number between 0 (inclusive) and 1 (exclusive)
    }
    
    do {
        array = array.slice(1);
    } while (array.length > 0 && maybeTrue());
    
    return array;
}