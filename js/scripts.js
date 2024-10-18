function exercise1(name) {
  const word = name.length;
  if (word > 5) {
    return name.toUpperCase();
  }
  return name.toLowerCase();
}
const word = exercise1('josefa');
console.log(word);

function exercise2(name) {
  const print = name.length;
  const numRandom = Math.floor(Math.random() * print);
  console.log(name.charAt(numRandom));
}

const print = exercise2('holas');
