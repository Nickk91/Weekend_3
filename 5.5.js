// rite a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H

function initialName(words) {
  "use strict";

  return words
    .replace(/\b(\w)\w+/g, "$1.")
    .replace(/\s/g, "")
    .replace(/\.$/, "")
    .toUpperCase();
}

console.log(initialName("Sam Harris"));
console.log(initialName("Dr Seuss"));
