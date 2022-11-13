# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @davique/lotide`

**Require it:**

`const _ = require('@davique/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: compares two arrays and asserts if the are the same `assertArraysEqual([1, 2, 3], [1, 2, 3]) // => ✅✅✅ Assertion Passed: [1,2,3] is equal to [1,2,3]`
* `assertEqual`: compares two values and asserts if they are the same `assertEqual(1, 1) // =>  ✅✅✅ Assertion Passed: 1 === 1`
* `assertObjectsEqual`: compares two arrays and asserts if the are the same `✅✅✅ Assertion Passed: { a: 1, b: 2 } is equal to { a: 1, b: 2 }`
* `countLetters`: returns how many times each letter appears in a string `_.countLetters('Hola') // => { H: 1, o: 1, l: 1, a: 1 }`
* `countOnly`: takes an array and a object with a subset of those items as keys and a boolean as a value and returns counts of the items that were truty 
* `eqArrays`: function that compares two arrays, returns true or false
* `eqObjects`: function that compares two objects, returns true or false
* `findKey`: function that evaluates an object and returns the value for the truty callback function
* `findKeyByValue`: looks inside an object for the value given and returns the key where that value is
* `flatten`: converts a nested array into a single alyer array
* `head`: returns the first item of and array `_.head([1, 2, 3]) // => 1`
* `letterPositions`: given a string it returns the position or index of the characters
* `map`: a function that creates a new array with the results of calling a callback function on every element from a given array
* `middle`: returns the middle item of and array if odd number of elements, or the two middle items if and even number of elements `_.middle([1, 2, 3]) // => [2]`
* `tail`: removes the first item of an array and returns the remainder items `_.tail([1, 2, 3]) // => [2, 3]`
* `takeUntil`: given an array and an item of that array it return a new array with the elements of the original array until it finds the given item
* `without`: returns a new array without the element entered as an argument