const student = "riYa";

const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const remainder = word.slice(1).toLowerCase();
  return `${firstLetter}${remainder}` 
};

console.log(capitalize(student));