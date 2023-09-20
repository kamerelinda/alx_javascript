#!usr/bin/node
// script that prints the number of movies where the character “Wedge Antilles” is present.
// including the request module
const req = require('request');

// the url is the first argument in cl arguments
const apiUrl = process.argv[2];

// ID of the character "Wedge Antilles"
const characterId = 18;
// initialize the count of movie with the character
let movieCount = 0;

req.get(apiUrl, (error, response, body) => {
  if (error) {
    console.log(error.message);
    process.exit(1);
  }

  const filmData = JSON.parse(body);

  filmData.results.forEach((film) => {
    if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
      movieCount++;
    }
  });
  console.log(`${movieCount}`);
});
