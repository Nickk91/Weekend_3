// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types

const findShort = (str) => Math.min(...str.split(" ").map((x) => x.length));
console.log(findShort("Please find the shortest length"));
