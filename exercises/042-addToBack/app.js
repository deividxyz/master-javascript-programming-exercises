function addToBack(arr, element) {
  arr.push(element)  // con push añado el elemento al final
  return arr  // devuelvo el array modificado
}

var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]