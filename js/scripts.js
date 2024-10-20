// Crea una funcion que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas.
function exercise1(name) {
  if (name) {
    const word = name.length;
    if (word > 5) {
      return name.toUpperCase();
    }
    return name.toLowerCase();
  }
  return 'No has escrito ninguna palabra';
}
const word = exercise1('josefa');
console.log(word);

// Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra.

function exercise2(name) {
  if (name) {
    const print = name.length;
    const numRandom = Math.floor(Math.random() * print);
    console.log(name.charAt(numRandom));
  } else {
    console.log('No has escrito ninguna palabra');
  }
}

const print = exercise2('holas');

//Crea una función que reciba dos palabras y devuelva cuál de las dos es más larga. Si ambas palabras tienen la misma longitud, deberá indicarlo.
function exercise3(nameA, nameB) {
  if (nameA && nameB) {
    const numberOfLetters = nameA.length;
    const letters = nameB.length;

    if (numberOfLetters > letters) {
      return nameA;
    } else if (letters > numberOfLetters) {
      return nameB;
    }
    return 'Ambas tienen la misma longitud';
  }
  return 'No escribiste las dos palabras';
}

const generate = exercise3('Josefa', 'María Lucía');
console.log(generate);

//Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras aleatorias de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona".
function generateWord(nameA, nameB, nameC) {
  function generateRandomWord(name) {
    const nameLength = name.length;
    const nameRandom = Math.floor(Math.random() * nameLength);
    return name.charAt(nameRandom);
  }
  if (nameA && nameB && nameC) {
    const randomLetters1 =
      generateRandomWord(nameA) + generateRandomWord(nameA);
    const randomLetter2 = generateRandomWord(nameB) + generateRandomWord(nameB);
    const randomLetter3 = generateRandomWord(nameC) + generateRandomWord(nameC);

    const generatedWord = randomLetters1 + randomLetter2 + randomLetter3;
    console.log(generatedWord);

    return generatedWord;
  }
  return 'No has escrito las tres palabras.';
}

const generatedWord = generateWord('espero', 'entender', 'algo');
console.log(generatedWord);

//Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com".

function nameEmail(name) {
  if (name && name.includes('@')) {
    const index = name.indexOf('@');
    return (
      'el usuario es ' +
      name.substring(0, index) +
      ' y el dominio es ' +
      name.substring(index + 1)
    );
  }
  return 'No has escrito bien el email';
}
const email = nameEmail('Jinostrozag@alumnostrazos.net');
console.log(email);

//Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs
function upperLowerCase(name) {
  if (name && name.length === 5) {
    const lower = name.charAt(0).toLowerCase();
    const upper = name.charAt(1).toUpperCase();
    const lower1 = name.charAt(2).toLowerCase();
    const upper1 = name.charAt(3).toUpperCase();
    const lower2 = name.charAt(4).toLowerCase();

    return lower + upper + lower1 + upper1 + lower2;
  }
  return 'La palabra que has escrito es mayor o menor a 5 letras';
}
const result = upperLowerCase('texto');
console.log(result);
//Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87".
function nameSurName(nameA, nameB) {
  if (nameA && nameB) {
    const ok = nameA.charAt(0);
    const random = Math.floor(Math.random() * 101);
    return ok + nameB + random;
  }
  return 'No has escrito las dos palabras';
}
const result2 = nameSurName('Josefa', 'Inostroza');
console.log(result2);

//Crea una función que reciba 2 verbos en infinitivo. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación".
function conjugation(nameA, nameB) {
  function conjugationName(name) {
    if (name.endsWith('ar')) {
      return 'primera conjugación';
    } else if (name.endsWith('er')) {
      return 'segunda conjugación';
    } else if (name.endsWith('ir')) {
      return 'tercera conjugación';
    }
  }
  if (nameA && nameB) {
    return `El verbo ${nameA} es de la ${conjugationName(
      nameA
    )} y el verbo ${nameB} es de la ${conjugationName(nameB)}.`;
  }
  return 'No has escrito los dos verbos';
}

const result3 = conjugation('saltar', 'dormir');
console.log(result3);

//Crea una función que reciba una palabra de 4 letras y devuelva la palabra invertida. Por ejemplo, si recibe "casa", deberá devolver "asac".

function reversedWord(name) {
  if (name && name.length === 4) {
    const word1 = name.charAt(3);
    const word2 = name.charAt(2);
    const word3 = name.charAt(1);
    const word4 = name.charAt(0);
    return word1 + word2 + word3 + word4;
  }
  return 'Tu palabra no contiene 4 letras';
}
const result4 = reversedWord('amor');
console.log(result4);

//Crea una función que reciba 3 palabras y calcule cuántos caracteres tienen en total. Por ejemplo, si recibe "Hola", "Mundo" y "Javascript", deberá imprimir 17.
function caracters(nameA, nameB, nameC) {
  if (nameA && nameB && nameC) {
    const x1 = nameA.length;
    const x2 = nameB.length;
    const x3 = nameC.length;

    return x1 + x2 + x3;
  }
  return 'No has escrito las tres palabras';
}
const result5 = caracters('acá', 'estoy', 'estudiando');
console.log(result5);

//Crea una función que reciba una frase y devuelva la frase con el formato de título, es decir, que cada palabra comience con mayúscula. Por ejemplo, "hola mundo" se convertiría en "Hola Mundo".
function titlePhrase(nameA) {
  if (nameA) {
    const phrase = nameA.charAt(0).toUpperCase();
    const phrase2 = nameA.substring(1, 8);
    const phrase1 = nameA.charAt(8).toUpperCase();
    const phrase3 = nameA.substring(9);

    return phrase + phrase2 + phrase1 + phrase3;
  }
  return 'No has escrito la frase correctamente';
}
const result6 = titlePhrase('querida lucía');
console.log(result6);

//Crea una función que reciba un nombre y un apellido y devuelva las iniciales en mayúsculas. Por ejemplo, si recibe "Carlos Pérez", deberá devolver "C.P.".

function initials(nameA) {
  if (nameA) {
    const ini = nameA.charAt(0).toUpperCase();
    const ini2 = nameA.charAt(nameA.indexOf(' ') + 1).toUpperCase();
    return ini + '.' + ini2 + '.';
  }
  return 'No has escrito el nombre y apellido';
}
const result7 = initials('Josefa Inostroza');
console.log(result7);

//Crea una función que reciba 3 palabras y calcule el promedio de la longitud de esas palabras. Por ejemplo, si recibe "hola", "adiós" y "mundo", el promedio sería 4.67.

function length(nameA, nameB, nameC) {
  if (nameA && nameB && nameC) {
    const l1 = nameA.length;
    const l2 = nameB.length;
    const l3 = nameC.length;
    return (l1 + l2 + l3) / 3;
  }
  return 'No has escrito las tres palabras';
}
const result8 = length('hola', 'que', 'tal');
console.log(result8);

//Crea una función que reciba un número de teléfono de 10 dígitos (como "1234567890") y lo formatee de la siguiente manera: "(123) 456-7890".
function phoneNumber(number) {
  const phone = String(number);
  if (number && phone.length === 10) {
    const phone1 = phone.substring(0, 3);
    const phone2 = phone.substring(3, 6);
    const phone3 = phone.substring(6);

    return '(' + phone1 + ')' + ' ' + phone2 + '-' + phone3;
  }
  return 'No has escrito un número de diez dígitos';
}
const result9 = phoneNumber(1234567890);
console.log(result9);

//Crea una función que reciba una palabra de 4 letras y la devuelva en orden inverso, duplicando cada letra. Por ejemplo, si recibe "hola", devolvería "aalloohh".
function wordByFour(name) {
  if (name && name.length === 4) {
    const word1 = name.charAt(3);
    const word2 = name.charAt(2);
    const word3 = name.charAt(1);
    const word4 = name.charAt(0);
    return word1 + word1 + word2 + word2 + word3 + word3 + word4 + word4;
  }
  return 'No has escrito la palabras de 4 letras correctamente';
}
const result10 = wordByFour('amor');
console.log(result10);

//- Crea una función que reciba un número de dos dígitos y devuelva true si ambos dígitos son pares. Por ejemplo, si recibe 24, devolvería true, pero si recibe 23, devolvería false.

function evenOdd(number) {
  const even = String(number);
  const x1 = Math.floor(number / 10);
  const x2 = number % 10;

  if (number && even.length === 2) {
    if (x1 % 2 === 0 && x2 % 2 === 0) {
      return true;
    }
    return false;
  }
  return 'No has escrito un número';
}
const result11 = evenOdd(24);
console.log(result11);

//- Crea una función que reciba dos palabras de 4 letras y verifique si contienen las mismas letras en diferente orden, por ejemplo "amor" y "mora"

function letter(nameA, nameB) {
  if (nameA && nameA.length === 4 && nameB) {
    const let1 = nameA.charAt(0);
    const let2 = nameA.charAt(1);
    const let3 = nameA.charAt(2);
    const let4 = nameA.charAt(3);

    if (
      nameB.includes(let1) &&
      nameB.includes(let2) &&
      nameB.includes(let3) &&
      nameB.includes(let4)
    ) {
      return true;
    }
    return false;
  }
  return 'No has escrito las dos palabras de cuatro letras';
}
const result12 = letter('amor', 'mora');
console.log(result12);

//- Crea una función que reciba un string y un número n, y devuelva los primeros n caracteres del string (puedes usar el método slice).

function slice(name, number) {
  if (name && number) {
    return name.slice(0, number);
  }
  return 'No has escrito un string y número';
}
const result13 = slice('televisor', 3);
console.log(result13);

//- Crea una función que reciba una frase y una palabra, y te diga si la palabra está o no en la frase
function isOnPhrase(nameA, nameB) {
  if (nameA && nameB) {
    if (nameA.includes(nameB)) {
      return 'Está la palabra en la frase';
    }
    return 'No está la palabra en la frase';
  }
  return 'No has escrito una palabra y una frase';
}
const result14 = isOnPhrase('amor de vida', 'vida');
console.log(result14);
