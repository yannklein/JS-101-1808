const student = "jOnATan";


// .slice(1) is the same as .substring(1)

const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const remainder = word.substring(1).toLowerCase();
  return `${firstLetter}${remainder}`;
};

const myName = capitalize(student)
console.log(myName);