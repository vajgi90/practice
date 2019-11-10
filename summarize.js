//Array generálás random számkkál
const generateArray = (size) => {
  const randomNumbers = []; // vagy = new Array(size); ebben az esetben a for-ban használható lenne a randomNumbers.lenght is
  for (let i = 0; i < size; i++) {
    randomNumbers[i] = Math.floor(Math.random() * 10) + 1; // randomNumbers.push(randomgenerálás)
  }
  return randomNumbers;
};

const generatedArray = generateArray(10);
console.log(generatedArray);

// Összegzés tétele
const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log('Összeg: ', sumArray(generateArray(10)));

// Megszámlálás tétele
const countElement = (element, arr) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      counter++;
    }
  }
  return counter;
};

console.log('3: ', countElement(3, generatedArray));

// Maximum keresés tétele;
const max = (arr) => {
  let maximum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }
  return maximum;
};

console.log('Max: ', max(generatedArray));

// Minimum keresés;
const min = (arr) => {
  let minimum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minimum) {
      minimum = arr[i];
    }
  }
  return minimum;
};

console.log('Min: ', min(generatedArray));

// Eldöntés tétele
const containsElement = (element, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true; 
    }
  }
  return false;
};

console.log('Contains 3: ', containsElement(3, generatedArray));

//
const containsElement2 = (element, array) => {
  let i = 0;
  while (i < array.length && array[i] !== element) {
    i++;
  }
  return i < array.length;
  /*  if (i < array.length) { Ez a hosszabb megoldás, de az előbbi sorral egyből visszaadjuk az értéket.
    return true;
  } else {
    return false;
  } */
};

console.log('Contains 3: ', containsElement2(3, generatedArray));

// Keresés tétele, ami az indexof mechanikusan

const indexOfArray = (element, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
};

console.log('Index of ', indexOfArray(3, generatedArray));

// Házi feladat otthon megírni ugyanezt while-lal

// Készítsünk egy fgv-t, amely két tömböt vár paraméterül, az első fel van töltve elemekkel, a második üres, és átmásolja az első tömb elemeinek dupláját a másodikba.

// Másolás tétele
const copy2x = (original, modified) => {
  for (let i = 0; i < original.length; i++) {
    modified[i] = original[i] * 2;
  }
  return modified;
};

console.log('Copy 2x: ', copy2x(generatedArray, [])); // fontos a második attribútum []

// Kiválogatás tétele

const selectEven = (array) => {
  const evens = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evens.push(array[i]); // ha csinálnék az elején egy j = 0 változót, akkor ez a sor lehetne evens[j] = evens[i] és ebben az esetben j nőne.
    }
  }
  return evens;
};

console.log('Even numbers: ', selectEven(generatedArray));

// Szétválogatás tétele (a feltételt nem teljesítő elemeket egy másik tömbbe adjuk vissza)
const evenOddNumbers = (array) => {
  const evens = [];
  const odds = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evens.push(array[i]);
    } else {
      odds.push(array[i]);
    }
  }
  return { even: evens, odd: odds };
};
const obj = evenOddNumbers(generatedArray);
console.log('Even: ', obj.even);
console.log('Odd: ', obj.odd);

// Metszet tétele

const intersection = (array1, array2) => {
  const inters = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; i < array2.length; j++) {
      if (array1[i] === array2[j]) {
        inters.push(array1[i]);
        break; // ekkor megtöri a belső for ciklust, hogy ne legyen duplikáció
      }
    }
  }
  return inters;
};

console.log('Intersection: ', intersection([1, 2, 3, 4], [3, 5, 4, -1, 3]));

// Unió tétele 

const union = (source1, source2) => {
  const solution = [];
  for (let i = 0; i < source1.length; i++) {
    let j = 0;
    while (j < solution.length && solution[j] != source1[i]) {
      j++;
    }
    if (j === solution.length) {
      solution.push(source1[i]);
    }
  }
  for (let i = 0; i < source2.length; i++) {
    let j = 0;
    while (j < solution.length && solution[j] != source2[i]) {
      j++;
    }
    if (j === solution.length) {
      solution.push(source2[i]);
    }
  }
  return solution;
};

console.log(union([1, 2, 3, 4], [1, 5, 2, 8]));

// Minimum rendezés

const source = [5, 2, 4, 8, 6, 3];

const minimumSelectionSort = (source) => {
  for (let i = 0; i < source.length; i++) { // A külső ciklus azért felel, hogy minden rendezés végrehajtódjon
    let minIndex = i;
    for (let j = i + 1; j < source.length; j++) { // A belső ciklussal megkeressük mindig a legkisebb elemet
      if (source[j] < source[minIndex]) {
        minIndex = j;
      }
    }
    console.log(source);
    if (i !== minIndex) {
      const temp = source[i]; // Így lehet technikailag megcserélni két változót, miután meg van a legkisebb elem mindig előre tesszük
      source[i] = source[minIndex];
      source[minIndex] = temp;
    }
  }
  return source; // most a sourcon végeztünk műveleteket és már módosult is.
};

/* minimumSelectionSort(source);
console.log(source); */

const insertionSort = (source) => {
  for (let i = 0; i < source.length; i++) {
    const temp = source[i]; // Erre szükségünk lesz a vizsgálat miatt
    let j = i - 1; // Mindig visszafele haladunk egy adott elemtől
    while (j >= 0 && source[j] > temp) {
      source[j + 1] = source[j]; // A j-t csökkentjük, a rákövetkező legyen egyenlő az előzővel, ha fordítva lenne feltöltenénk az egész tömböt az adott számmal
      j--;
    }
    source[j + 1] = temp;
    console.log(source);
  }
  return source;
};

/* insertionSort(source);
console.log(source); */

// Buborék rendezés

const bubbleSort = (source) => {
  for (let i = source.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (source[j] > source[j + 1]) {
        const temp = source[j + 1];
        source[j + 1] = source[j];
        source[j] = temp;
      }
      console.log(source);
    }
  }
};

bubbleSort(source);
console.log(source);