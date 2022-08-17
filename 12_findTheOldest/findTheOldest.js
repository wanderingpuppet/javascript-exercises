const findTheOldest = function(people) {
  // Sort people from oldest to youngest
  people.sort((a, b) => {
    let currentYear = (new Date()).getFullYear();

    // Calculate a person age using the current year if they are still alive
    let aYearOfDeath = a.yearOfDeath !== undefined ? a.yearOfDeath : currentYear;
    let bYearOfDeath = b.yearOfDeath !== undefined ? b.yearOfDeath : currentYear;

    let aAge = aYearOfDeath - a.yearOfBirth;
    let bAge = bYearOfDeath - b.yearOfBirth;
    return bAge - aAge;
  });
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
