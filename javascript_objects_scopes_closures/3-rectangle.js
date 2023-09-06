#!/usr/bin/node
// class defines a rectangle
class Rectangle {
  constructor (w, h) {
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
      // If w or h is equal to 0 or not a positive integer, create an empty object
      return 'Rectangle{}';
    }
    // initialize the instance attributes width and height
    this.width = w;
    this.height = h;
  }

  // instance method to print the rectangle using x
  print () {
    for (let i = 0; i < this.height; i++) {
      let row = '';
      for (let j = 0; j < this.width; j++) {
        row += 'X';
      }
      console.log(row);
    }
  }
}
// exports the module to be used in a different module
module.exports = Rectangle;
