// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe("shufflin", () => {
    it("removes the first item from the array and shuffles the remaining content.", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
      expect(shufflin(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
      expect(shufflin(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
  })
//Got RED
// shufflin › removes the first item from the array and shuffles the remaining content.

//     ReferenceError: shufflin is not defined
// b) Create the function that makes the test pass.

//create a function shufflin
  //takes an array as an input
    //expected output is a subset of the array shuffled with the index 0 removed
//use a tool delete/remove index 0 --.shift()
  //then randomize the array
    //shortened array
        //make a random number to represent a random index in the array
        //make the current value become = value at the random index
        //make the value at the random index become = to the value at the current index
            //the shuffling happens a number of times = to the length
//tools and research-> filter is a good tool to return a subset of an array & is a built in method. Math.floor & Math.Random can be used to randomize the array a for loop could also iterate over the array. With a for loop I can  shift() always removes the first element, and then returns that element. .length can be used to find the number to be shuffled from the array
const shufflin = (array) => {
    //first we remove index 0
    array.shift()
        //then iterate over the array to randomize it
        for(i=0; i<array.length; i++){
            //this randomizes a number of 0-length of the array
            let randomIndex = Math.floor(Math.random() * array.length)
            //this is the current value that will be swapped
            let tempPlace = array[i]
            //the current value becoming a random value
            array[i] = array[randomIndex]
            //the random value then becoming the current value
            array[randomIndex] = tempPlace
    }
    return array
}

//Got GREEN
// PASS  ./code-challenges.test.js
// shufflin
//   ✓ removes the first item from the array and shuffles the remaining content. (1 ms)

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minMax", () => {
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        // Expected output: [-8, 90]
        const nums2 = [109, 5, 9, 67, 8, 24]
        // Expected output: [5, 109]
      expect(minMax(nums1)).toEqual([-8, 90])
      expect(minMax(nums2)).toEqual([5, 109])
    })
  })

// b) Create the function that makes the test pass.
//create a function called minMax
  //it takes an array of numbers as its input
    //its expected output is a subset of that array with the smallest value and largest value i the array
    // use something to sort the array from smallest to largest
        //return index 0 and the last index?
//tools and research--> .sort() can be defined to go fom smallest to largest instead of largest to smallest. make a new array hold those values? .lastOf? .length gives the index +1 so subtracting 1 would result in the last index?

const minMax = (array) => {
    //declaare the newArr to store the new information
    let newArr = []
    //sort the old array
    array.sort((a,b) => a-b)
    //push index 0 (the lowest number)
    newArr.push(array[0])
    //push the last index (the highest number)
    newArr.push(array[array.length-1])
    //return the new array of lowest and highest
    return newArr
}

//got GREEN
// PASS  ./code-challenges.test.js
//   shufflin
//     ✓ removes the first item from the array and shuffles the remaining content. (1 ms)
//   minMax
//     ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("dupeBad", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
        // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
      expect(dupeBad(testArray1, testArray2)).toEqual(expect.arrayContaining([3, 7, 10, 5, 4, 8, 2, 1]))
    })
  })

  //got RED
//   dupeBad
//   ✕ takes in two arrays as arguments and returns one array with no duplicate values. (1 ms)

// ● dupeBad › takes in two arrays as arguments and returns one array with no duplicate values.

//   ReferenceError: dupeBad is not defined
// b) Create the function that makes the test pass.
//create a function dupeBad
  //takes in arrays
    //expected output is a new array with no duplicates
//declare a new variable that contains all of the arrays combined into one
//declare a new variable intended to store no duplicates
  //iterate over the array 
    //use a conditional to compare the current value to the previous value.
        //if the values are not the same store that value
//tools and research--> use a boolean to compare current value to previous value, .filter and .map iterates over an array .push can be used to send the non duplicate information into an array. for loop could be used as well. concat combines arrays.

// const dupeBad = (array1, array2) => {
//     //new variable of arg1 combined with arg2
//     let newArr = array1.concat(array2)
//     //sort the new array
//     newArr = newArr.sort((b,a)=>b-a)
//     //placeholder for non-dupe values
//     let noDupe = []
//     //for loop to iterate over the length of the array
//     for(i = 0; i<newArr.length; i++){
//         // newArr[i] === newArr[i-1]?noDupe.push(newArr[i]):newArr possible ternary instead?
//         //conditional checking current value vs previous value
//         if(newArr[i] !== newArr[i-1]){
//             //push current value if it is not the same as previous
//             noDupe.push(newArr[i])
//         }
//     }
//     //return the new array
//     return noDupe
// }
//got GREEN
// PASS  ./code-challenges.test.js
// shufflin
//   ✓ removes the first item from the array and shuffles the remaining content. (2 ms)
// minMax
//   ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order. (2 ms)
// dupeBad
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values. (1 ms)

//looking at the stretch i think using a spread operator would actually refactor my code in a positive way
//the research i found said it concats arrays by default?


//took me a little bit to figure out the syntax but it is just making a pattern
const dupeBad = (array, array2, ...array3) => {
    //the pattern can continue inside of other arguments
    newArr = array.concat(array2, ...array3)
    //sort the values
    newArr = newArr.sort((b,a)=>b-a)
    let noDupe = []
    //for loop to iterate over the length of the array
    for(i = 0; i<newArr.length; i++){
        // newArr[i] === newArr[i-1]?noDupe.push(newArr[i]):newArr possible ternary instead?
        //conditional checking current value vs previous value
        if(newArr[i] !== newArr[i-1]){
            //push current value if it is not the same as previous
            noDupe.push(newArr[i])
        }
    }
    //return the new array
    return noDupe
}
//Hope I did the stretch challenge correctly!
//Got Green
// PASS  ./code-challenges.test.js
//   shufflin
//     ✓ removes the first item from the array and shuffles the remaining content. (1 ms)
//   minMax
//     ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order. (2 ms)
//   dupeBad
//     ✓ takes in two arrays as arguments and returns one array with no duplicate values.
