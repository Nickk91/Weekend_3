// Basic
// Ex1.1 - Yes or No
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"
// string for false.

let laptop = {
  cpu: "i9",
  ram: 16,
  brand: "HP",

  check: function () {
    return this.brand === "HP" ? "Yes" : "No";
  },
};

console.log(laptop.check());
