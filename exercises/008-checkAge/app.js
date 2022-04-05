function checkAge(name, age) {
  if (age < 21) {
    return `Go home, ${name}!`;  // devuelvo string, esto lo concateno con los backticks
  } else {
    return `Welcome, ${name}!`;
  }
}