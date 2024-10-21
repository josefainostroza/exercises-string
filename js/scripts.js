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

function exercise3(nameA,nameB){
    const  numberOfLetters= nameA.length;
    const  letters= nameB.length;

    if(numberOfLetters>letters){
      return nameA;
      }else if(letters>numberOfLetters){
      return nameB;
      }
        return 'ambas tienen la misma longitud';
  }

const generate=exercise3('Josefa','María Lucía')
console.log(generate)

function generateWord(nameA,nameB,nameC){

  function generateRandomWord(name){
    const nameLength = name.length;
    const nameRandom = Math.floor(Math.random()*nameLength)
    return name.charAt(nameRandom);
  }

const randomLetters1 = generateRandomWord(nameA) + generateRandomWord(nameA);
const randomLetter2 = generateRandomWord(nameB) + generateRandomWord(nameB);
const randomLetter3 = generateRandomWord(nameC) + generateRandomWord(nameC);

const generatedWord= randomLetters1 + randomLetter2 + randomLetter3
console.log(generatedWord);

return generatedWord;
}
const generatedWord =generateWord('espero','entender', 'algo')
console.log(generatedWord);

function nameEmail(name){
  return 'el usuario es '+ name.substring(0,10) + ' y el dominio es ' + name.substring(12);
}
const email=nameEmail('Jinostrozag@alumnostrazos.net')
console.log(email);

function upperLowerCase(name){
  const lower= name.charAt(0).toLowerCase();
  const upper= name.charAt(1).toUpperCase();
  const lower1= name.charAt(2).toLowerCase();
  const upper1= name.charAt(3).toUpperCase();
  const lower2= name.charAt(4).toLowerCase();
  
  return lower+upper+lower1+upper1+lower2;
}
const result = upperLowerCase('texto')
console.log(result);

function nameSurName(nameA,nameB){
  const ok= nameA.charAt(0);
  const random= Math.floor(Math.random()*101);
  return ok + nameB + random;
}
const result2= nameSurName('Josefa','Inostroza');
console.log(result2);


function  conjugation(nameA,nameB){
function conjugationName(name){
  if (name.endsWith('ar')){
    return 'primera conjugación'
  }else if (name.endsWith('er')){
    return 'segunda conjugación'
  } else if(name.endsWith('ir')){
    return 'tercera conjugación'
  }
}
console.log(`El verbo ${nameA} es de la ${conjugationName(nameA)} y el verbo ${nameB} es de la ${conjugationName(nameB)}.`)
} 
const result3=conjugation('saltar', 'dormir');

function reversedWord(name){
  const word1= name.charAt(3)
  const word2= name.charAt(2)
  const word3= name.charAt(1)
  const word4= name.charAt(0)
  return word1+word2+word3+word4
}
const result4=reversedWord('amor');
console.log(result4)

function caracters(nameA,nameB,nameC){
    const x1=nameA.length;
    const x2=nameB.length;
    const x3=nameC.length;

    return x1+x2+x3
  }
const result5 = caracters('acá','estoy','estudiando')
console.log(result5)

function titlePhrase (nameA){
  const phrase=nameA.charAt(0).toUpperCase();
  const phrase2=nameA.substring(1,8);
  const phrase1=nameA.charAt(8).toUpperCase();
  const phrase3=nameA.substring(9);

  return phrase+phrase2+phrase1+phrase3
}
const result6 = titlePhrase('querida lucía')
console.log(result6)

function initials(nameA,nameB){
  const ini=nameA.charAt().toUpperCase();
  const ini2=nameB.charAt().toUpperCase();
  return ini+'.'+ini2+'.'
}
const result7 = initials('Josefa', 'Inostroza')
console.log(result7)

function length(nameA,nameB,nameC){
  const l1=nameA.length;
  const l2=nameB.length;
  const l3=nameC.length;
  return (l1+l2+l3)/3
}
const result8 = length('hola', 'que', 'tal')
console.log(result8)

function phoneNumber(number){
  const phone1=number.substring(0,3);
  const phone2=number.substring(3,6);
  const phone3=number.substring(6);

  return '('+phone1+')'+' '+phone2+'-'+phone3
}
const result9 = phoneNumber('0123456789')
console.log(result9)

function wordByFour(name){
  const word1= name.charAt(3);
  const word2= name.charAt(2);
  const word3= name.charAt(1);
  const word4= name.charAt(0);
  return (word1+word1)+(word2+word2)+(word3+word3)+(word4+word4);
}
const result10=wordByFour('amor');
console.log(result10)

function evenOdd(number){
  if(number%2===0){
    return 'true'
}return 'false'
}
const result11=evenOdd('24');
console.log(result11)

function letter(nameA,nameB){


if(nameA.includes(nameB)){
  return 'true'
} return 'false'
}
const result12=letter('amor','mora');
console.log(result12);
