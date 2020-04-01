var numbers = [ 5, 2, -50, -10, 1, 4, 100];


function findMax(array) {
  var max = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    } 
  }

  return max;
}

var result = findMax([5, 2, -50, -10, 1, 4, 100]);

console.log('result :', result);