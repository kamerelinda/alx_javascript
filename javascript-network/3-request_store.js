#!/usr/bin/node
// script that gets the contents of a webpage and stores it in a file

const req = require('request');

// url as first argument on cl
const webUrl = process.argv[2];

req.get(webUrl, (error, response, body) => {
  if (error) {
    console.log(error.message);
    process.exit(1);
  }
  // adds the fs module
  const fs = require('fs');
// file path stored in second argument
  const txtFilePath = process.argv[3];
// write to the file on path content of the body synchronously
  fs.writeFileSync(txtFilePath, body, 'utf-8');
});
