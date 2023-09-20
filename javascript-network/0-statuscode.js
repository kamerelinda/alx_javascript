#!/usr/bin/node
// script that display the status code of a GET request
// adding the request module
const req = require('request');

// assigning the url to the second first cl elements
const reqURL = process.argv[2]

// using the request and get,on the url and
// adding the error and response properties
req.get(reqURL, (error, response)=> {
    if (error)
        console.log(error)
    // accessing the response status code and outputting it
    console.log(`code: ${response.statusCode}`);
});
