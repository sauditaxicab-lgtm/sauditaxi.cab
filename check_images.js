const fs = require('fs');
const sizeOf = require('image-size');

const files = [
  'public/GMC/Gmc main.jpg',
  'public/Camry/Camry main image.jpeg',
  'public/Staria/staria main.jpeg'
];

files.forEach(file => {
  try {
    const dimensions = sizeOf(file);
    console.log(`${file}: ${dimensions.width}x${dimensions.height}`);
  } catch (err) {
    console.error(`Error reading ${file}: ${err.message}`);
  }
});
