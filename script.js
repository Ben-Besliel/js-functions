'use strict';

// // DEFAULT PARAMETERS
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

// // HOW PASSING ARGUMENTS WORKS : Value VS. Reference
// const flight = 'LH234';
// const ben = {
//   name: 'Ben Besliel',
//   passport: 1254645355,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 1254645355) {
//     alert('Checked In');
//   } else {
//     alert('Wrong passport');
//   }
// };

// // checkIn(flight, ben);
// // console.log(flight);
// // console.log(ben);

// // // It is same as doing...
// // const flightNum = flight;
// // const passenger = ben;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };
// newPassport(ben);
// checkIn(flight, ben);
// console.log(ben);

// // FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('💥');
// };

// document.body.addEventListener('click', high5);

// ['Ben', 'Hemanth', 'Samuel'].forEach(high5);

// // FUNCTIONS RETURNING FUNCTIONS

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Ben');
// greeterHey('Hemanth');

// greet('Hello')('Ben');

// const greet2 = greeting => name2 => console.log(`${greeting} ${name2}`);

// const greeterHey2 = greet2('Hey');
// greeterHey2('Ben');
// greeterHey2('Hemanth');
// greet2('Hello')('Besliel');

// // THE CALL AND APPLY METHODS

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({
//       flight: `${this.iataCode}${flightNum}`,
//       name,
//     });
//   },
// };

// lufthansa.book(239, 'Ben Besliel');
// lufthansa.book(635, 'Hemanth');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EH',
//   bookings: [],
// };

// const book = lufthansa.book;

// // // Does NOT work
// // eurowings.book(23, 'Anne Latha');

// book.call(eurowings, 23, 'Anne Latha');
// console.log(eurowings);

// book.call(lufthansa, 253, 'Samuel');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 897, 'Prem');
// console.log(swiss);

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// // The bind Method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Ben Besliel');
// bookEW23('Bessi');

// // With Event Listners
// lufthansa.planes = 300;

// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial Application <-- Pre setting parameters

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23;

// console.log(addVAT(100));

// const addTax2 = rate => value => value + value * rate;
// const addVAT2 = addTax2(0.23);
// console.log(addVAT2(100));

// // CODING CHALLANGE
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerAnswer: function () {
//     // Get Answer
//     const answer = Number(
//       prompt(`${this.question}\n${this.options.join('\n')}
// (Write option number)`)
//     );

//     console.log(answer);
//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults: function (type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// // poll.registerAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// // IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE);

// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

// //IIFE
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 15;
// })();

// (() => console.log('This will never run again'))();

// {
//   const private = 15; // cannot be accessable outside this block
//   var notPrivate = 155; // can be accessable outside this block
// }

// console.log(private);
// console.log(notPrivate);

// CLOSURES

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

// CLOSURE EXAMPLES

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();

console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
