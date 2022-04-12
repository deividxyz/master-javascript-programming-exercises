function isEitherEvenOrAreBoth7(num1, num2) {
    if ((num1===num2) && (num1 ===7)) {
        return true
    } else if ((num1 % 2 === 0) || (num2 % 2 === 0)) {  //elseif para caso especial
        return true
    } else {
        return false
    }
}
