function countCharacter(str, char) {
    var re = new RegExp(char, "g")  // genero una nueva exp regular
    return str.match(re).length  // busco en el string según la exp regular y saco el largo
}