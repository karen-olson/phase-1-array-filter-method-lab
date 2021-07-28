// Code your solution here

const driversArray = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

const arrayOfDriverObjects = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function findMatching(arrayOfDriversNames, string) {
  // Write the callback function that specifies the search condition
  // Checks a name to see if it matches the name you're looking for
  // Returns true or false

  function matchName(name) {
    if (name.toLowerCase() === string.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }

  return arrayOfDriversNames.filter(matchName);
}

function fuzzyMatch(arrayOfDriversNames, string) {
  // Create a callback function that checks to see if the first letters in a name
  // match the provided string

  function matchFirstLetters(name) {
    // Figure out how long the string is
    // Then, cut off that many characters from the beginning of the name argument
    const slicedName = name.slice(0, string.length);
    console.log(slicedName);

    // Then, see if the sliced name matches the string (not case sensitive)
    // If so, return true. If not, false.
    if (slicedName.toLowerCase() === string.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }

  // Then, pass the callback function to the filter when you call it on the array.
  return arrayOfDriversNames.filter(matchFirstLetters);
}

function matchName(arrayOfDriverObjects, string) {
  // Create a callback function that looks at an object
  // and checks to see if the value of its name property matches the given string
  function checkNameProperty(object) {
    if (object.name.toLowerCase() === string.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }

  // Call .filter on the array of objects
  // Pass checkNameProperty to .filter() as the callback function
  // Return each element whose name property passed the test
  return arrayOfDriverObjects.filter(checkNameProperty);
}

// Run matchName on arrayOfDriverObjects, giving it 'Bobby' as the string to match
const findBobby = matchName(arrayOfDriverObjects, "Bobby");
console.log(findBobby);
