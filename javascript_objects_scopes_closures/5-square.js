#!/usr/bin/node
// creates class square inherits from rectangle
const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor (size) {
    super(size, size);
    // Call the constructor of the parent class (Rectangle) with size as both width and height
  }
}

module.exports = Square;
