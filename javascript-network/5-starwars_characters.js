#!/usr/bin/node
// script that prints all characters of a Star Wars movie:

const request = require('request');
// Get the Movie ID from the command line arguments
const movieId = process.argv[2];

// Function to fetch characters for a specific movie

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
  const movieData = JSON.parse(body);

  // Iterate through the character URLs and fetch character details
  movieData.characters.forEach((characterUrl) => {
    request.get(characterUrl, (charError, charResponse, charBody) => {
      if (charError) {
        console.error('Error:', charError.message);
        process.exit(1);
      }
      const characterData = JSON.parse(charBody);
      console.log(characterData.name);
    });
  });
});
