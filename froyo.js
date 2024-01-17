/*
A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they observe a table listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.




*/

//need prompt ----> vanilla,vanilla,vanilla,strawberry,coffee,coffee

//create a prompt that will prompt userr to enter list of froyo flavors

const userInput = prompt("please enter list of comma-seperated flavors");
console.log("userInput --->", userInput);

//convert string into an array with split (delete commas)
const froyoFlavors = userInput.split(",");

console.log("froyoFlavors--->", froyoFlavors);

const arrayOfFlavors = [
  "vanilla",
  "vanilla",
  "vanilla",
  "strawberry",
  "coffee",
  "coffee",
];
console.table(arrayOfFlavors);

//create a function named freqCounter that takes in array as a parameter
function createFreqCounter(array) {
  //create empty object to populate with key:value pairs
  // key:value are going to be a count of all elements in array
  const flavorCounter = {};
  //loop over the froyoFlavors array to get every element
  for (let i = 0; i < array.length; i++) {
    //grab each element and store in a variable
    const element = array[i];
    //if flavor exists in object
    if (element in flavorCounter) {
      //I want to increment teh value in the object
      flavorCounter[element] += 1;
      //otherwise
    } else {
      // I want to add the element to the object and give value of 1
      flavorCounter[element] = 1;
    }
  }
  //return the built object
  return flavorCounter;
}

const getFlavorCount = createFreqCounter(froyoFlavors);
console.table(getFlavorCount);
