// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  [];

  result = array.map(movie => movie.director);


  //console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  const moviesFromDirector = array.filter(movie => movie.director === director);
  return moviesFromDirector;
  
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  const moviesFromDirector = getMoviesFromDirector(array, director);
  const totalScore = moviesFromDirector.reduce((accumulator, movie) => accumulator + movie.score, 0);
  const averageOfDirector = (totalScore / moviesFromDirector.length);
  return Number(averageOfDirector.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  arrayCopy =[...array];
  const sortedMoviesByTitle = arrayCopy.sort((a, b) => (a.title).localeCompare(b.title));
  const titles = sortedMoviesByTitle.map(movie => movie.title);
  return titles.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {

  moviesCopy = [...movies];
  const sortedMoviesByYear = moviesCopy.sort((a,b) => (a.year - b.year) || (a.title).localeCompare(b.title));
  
  return sortedMoviesByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const moviesWithTheCategory = array.filter(movie => movie.genre.includes(category));

  const totalScore = moviesWithTheCategory.reduce((accumulator, movie) => accumulator + movie.score, 0);
  const averageScore = totalScore / moviesWithTheCategory.length;

  return Number(averageScore.toFixed(2)); 
}

// Exercise 7: Modify the duration of movies to minutes
function stringTimeToInt(duration){
  timeArray = duration.split(' ');
  let hours = parseInt(timeArray[0], 10);
  let minutes =timeArray[1] ? parseInt(timeArray[1], 10) : 0;

  return hours*60 + minutes;
}

function hoursToMinutes(array) {
  arrayCopy = [...array];
  const moviesWithMinutes = arrayCopy.map(movie =>  { 
    return {...movie, duration: stringTimeToInt(movie.duration)
    }
  });

  return moviesWithMinutes;
}
 
// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  
  const moviesOfAYear = movies.filter(movie => movie.year === year);
  moviesOfAYear.sort((a,b) => b.score - a.score)
  
  return [moviesOfAYear[0]];
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
