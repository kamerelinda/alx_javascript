#!/usr/bin/node
// script that prints the title of a Star Wars movie
// where the episode number matches a given integer

const req = require('request');

// movie id from cl arguments
const movieId = process.argv[2];

const swApi = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

req.get(swApi, (error, response, body) => {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  const movieData = JSON.parse(body);
  console.log(`${movieData.title}`);
});
