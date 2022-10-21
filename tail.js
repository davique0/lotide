const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = userArr => userArr.slice(1);

const words = ["Hello", "Hi", "Hola"];
const result = tail(words);
assertEqual(result.length, 2);
assertEqual(result[0], "Hi");
