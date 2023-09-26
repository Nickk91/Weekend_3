// Ex5.2 - String Repeat
// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n, string) {
  //   let newString = "";
  //   for (let i = 0; i < n; i++) {
  //     newString += string;
  //   }
  //   return string;
  return string.repeat([n]);
}

console.log(repeatStr(3, "COOL"));
