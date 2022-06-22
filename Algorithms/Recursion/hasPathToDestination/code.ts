/*
    Create A algorithm that creates an itinary that is given to the user to tell them if they can travel from one location to another, note interlinking flights can also be use to travel to the location
*/

// Dictionary containing the possible flights from a location to a possible destination
const listOfPaths = {
  NY: ["GAP", "UK", 'US'],
  GAP: ["LA"],
  LA: ["CNY"],
  CNY: ["JPN", "RSA"],
  JPN: ["TOR"],
  UK: ["RSA"],
  TOR: ["UK"],
  RSA: ["LA"],
};

// uses Depth first search to find if the flight travel is possible
const hasPath: Function = (
  list: { [key: string]: Array<string> },
  currLocation: string,
  destination: string
) => {
  if (currLocation === destination) return true;
  let canBeTraveledTo: boolean = false;

  try {
    const recurse = (currAirPort: string = currLocation) => {
      for (const i of list[currAirPort]) {
        console.log(i, currAirPort);
        if (i === destination) canBeTraveledTo = true;
        else return recurse(i);
      }
    };

    recurse();
  } catch (err) {
    return err;
  }

  return canBeTraveledTo;
};

console.log(hasPath(listOfPaths, "NY", "RSA"));

// Function to use depth first search to find the users nearest flight path for optimization

const closestPath: Function = (
  list: { [key: string]: Array<string> },
  currLocation: string,
  destination: string
) => {
  if (currLocation === destination) return true;
  let path = [];

  try {
    const recurse = (currAirPort: string = currLocation) => {
      for (const i of list[currAirPort]) {
        console.log(i, currAirPort);
        // if (i === destination) canBeTraveledTo = true;
        // else return recurse(i);
      }
    };

    recurse();
  } catch (err) {
    return err;
  }

  return path;
};

console.log(closestPath(listOfPaths, "NY", "RSA"));
