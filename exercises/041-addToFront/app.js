function addToFront(arr, element) {
  arr.unshift(element) // unshift añade elementos al principio del array
  return arr  // se devuelve el array, unshift solo pasa el largo del array
}

var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

//Hint: you can use unshift