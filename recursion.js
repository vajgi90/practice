// Faktoriális 
const factorial = (num) => {
  if (num < 0) return -1;
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

let example = factorial(3);
console.log(example);

//
const countDown = (counter) => {
  console.log(counter);
  if (counter !== 0) {
    //    console.log(counter); ha ez itt lenne nem 0-ig megy csak 1-ig
    counter--;
    countDown(counter);
  }
  // return de ezt nem kell kihívni
};

countDown(10);

// Tömb minimum keresés
const arrMin = (index, arr) => {
  if (index === 1) {
    return arr[0];
  }
  return Math.min(arr[index - 1], arrMin((index - 1), arr));
};

// console.log(arrMin(5, [1, 2, -5, 0, 7]));

// Rekurzióval jól ábrázolható problémák Fibonacci sorozat
const fibo = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
};

/* setInterval(() => {
  console.log(fibo());
}, 1000); */

//console.log(fibo(4));
/* for (let i = 0; i < 10; i++) {
 process.stdout.write(fibo(i) + ' ');
} */

//Faktoriális számítás
let fact = (n) => {
  if (n > 1) {
    return n * fact(n - 1);
  }
  // vagy ternálisan return (n <= 1 ? 1 : n * fact(n - 1))
  return 1;
};

//console.log(fact(5));

const factIter = (n) => {
  let res = 1;
  for (let i = n; i >= 1; i--) {
    res *= i;
  }
  return res;
};
//console.log(factIter(0));
//console.log(Number.MAX_SAFE_INTEGER)

let arraySum = (my_array) => {
  if (my_array.length === 1) {
    return my_array[0];
  }
  else {
    return (my_array.pop() + arraySum(my_array));
  }
};

/* let result = arraySum([1, 2, 3, 4, 5, 6]);
console.log(result) */

//exponentiation

let exp = (base, power) => {
  if (power === 0) return 1;
  else if (power === 1) return base;
  else {
    return base * exp(base, power - 1);
  }
};

/* let result2 = exp(2, 4);
console.log(result2); */

const fib2 = (num) => {
  if (num === 0) {
    return 0;
  }
  let number1 = 0;
  let number2 = 1;
  let number3;
  for (let i = 1; i < num; i++) {
    number3 = number1 + number2;
    number1 = number2;
    number2 = number3;
  }
  return number3;
};

console.log(fib2(5));