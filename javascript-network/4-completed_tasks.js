#!/usr/bin/node
// script that computes the number of tasks completed by user id.
const req = require('request');

// url is first argument on url
const apiUrl = process.argv[2];

req.get(apiUrl, (error, response, body) => {
  if (error) {
    console.log(error.message);
    process.exit(1);
  }

  const taskData = JSON.parse(body);

  // create a new object to store no. of completed tasks
  const completedTasksByUser = {};

  // Iterate through the task data and count completed tasks by user
  taskData.forEach((task) => {
    if (task.completed) {
      if (!completedTasksByUser[task.userId]) {
        completedTasksByUser[task.userId] = 1;
      } else {
        completedTasksByUser[task.userId]++;
      }
    }
  });
  // Convert the object to the desired format using JSON.stringify()
  const formattedOutput = JSON.stringify(completedTasksByUser, null, 2);

  console.log(formattedOutput);
});
