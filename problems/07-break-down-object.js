/***********************************************************************
function breakDownObj(obj) {
  // Get all keys and values of the object
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  
  // Combine the keys and values into a single array using the spread syntax
  return [...keys, ...values];
}

// Example usage:
let object1 = { name: 'Rupert', age: 5, speak: 'Meow' };
console.log(breakDownObj(object1)); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = { location: 'NY', borough: 'Brooklyn' };
console.log(breakDownObj(object2)); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]

***********************************************************************/

function breakDownObj(obj) {
  // Get all keys and values of the object
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  
  // Combine the keys and values into a single array using the spread syntax
  return [...keys, ...values];
}

// Example usage:
let object1 = { name: 'Rupert', age: 5, speak: 'Meow' };
console.log(breakDownObj(object1)); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = { location: 'NY', borough: 'Brooklyn' };
console.log(breakDownObj(object2)); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = breakDownObj;