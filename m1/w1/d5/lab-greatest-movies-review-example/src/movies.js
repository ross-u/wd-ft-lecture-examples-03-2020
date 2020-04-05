/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  const sorted = [...arr].sort(function(a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return sorted;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
  let numberOfDrama = 0;
  const dramaMovies = array.filter(function(drama) {
    if (
      drama.genre.includes("Drama") &&
      drama.director === "Steven Spielberg"
    ) {
      return true;
    }
  });
  numberOfDrama = dramaMovies.length;
  return numberOfDrama;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  let newArray = array.map(function(order) {
    return order.title;
  });
  let title = newArray.sort();
  return title.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArr) {
  let moviesWithoutRate = 0;
  if (!moviesArr.length) {
    return 0;
  }

  const rating = moviesArr.reduce(function(acc, movie) {
    // if movie doesn't have a rate
    if (!movie.rate) {
      moviesWithoutRate++;
      return acc;
    }
    const updatedAcc = acc + movie.rate;

    return updatedAcc;
  }, 0);

  const moviesLength = moviesArr.length - moviesWithoutRate;
  return Number((rating / moviesLength).toFixed(2));
}

// ugh i don't know how to resolve this one (iteration 4)

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  let genreFilter = array.filter(movie => {
    return movie.genre.includes("Drama");
  });
  return ratesAverage(genreFilter);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArr) {
  const updatedMovies = moviesArr.map(movieObj => {
    // Create a copy of the movie object
    const updateMovieCopy = { ...movieObj };
    updateMovieCopy.duration = durationToMinutes(movieObj.duration);

    return updateMovieCopy;
  });

  return updatedMovies;
}

// Helper function - converts duration string to minutes
function durationToMinutes(durationString) {
  //       "2h 22min"
  const timeStrings = durationString.split(" "); // ["2h", "2min"]  or ["22min"] or ['2h']

  const timeInMinutes = timeStrings.reduce(function(acc, string) {
    if (string.includes("h")) {
      // convert hours strint to number of minutes
      const numOfHours = parseInt(string);
      const minutes = numOfHours * 60;

      // update the reduce accumulator
      const updatedAcc = acc + minutes;
      return updatedAcc;
    } else {
      // convert minutes string to number of minutes
      const numOfMinutes = parseInt(string);

      // update the reduce accumulator
      const updatedAcc = acc + numOfMinutes;
      return updatedAcc;
    }
  }, 0);

  return timeInMinutes;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(moviesArr) {
  if (!moviesArr.length) return null;

  // console.log("moviesArr :", moviesArr);

  // Create a dictionary (object) that has movies organized by year
  const dictionary = {};

  moviesArr.forEach(function(movie) {
    if (!dictionary[movie.year]) {
      // if the year doesn't exist in the dictionary,
      // create an array representing that year
      dictionary[movie.year] = [];
      dictionary[movie.year].push(movie);
    } else {
      dictionary[movie.year].push(movie);
    }
  });

  console.log("dictionary :", dictionary);

  let highestRate = 0;
  let theBestYear;

  // Loop over the dictionary object to determine which year has the highest average rate
  for (const yearKey in dictionary) {
    // for..in gives the property name as a string
    const yearAverageRate = ratesAverage(dictionary[yearKey]);

    if (yearAverageRate > highestRate) {
      highestRate = yearAverageRate;
      theBestYear = year;
    }
  }

  return `The best year was ${theBestYear} with an average rate of ${highestRate}`;
}
