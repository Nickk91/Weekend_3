// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    const repeatedChar = char.repeat(i + 1);
    const capitalizedChar =
      repeatedChar.charAt(0).toUpperCase() + repeatedChar.slice(1);
    result.push(capitalizedChar);
  }

  return result.join("-");
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
