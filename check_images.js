const fs = require('fs');
const sizeOf = require('image-size');

const files = [
  'public/gmc/gmc-main.jpg',
  'public/camry/camry-main.jpeg',
  'public/staria/staria-main.jpeg'
];

files.forEach(file => {
  try {
    const dimensions = sizeOf(file);
    console.log(`${file}: ${dimensions.width}x${dimensions.height}`);
  } catch (err) {
    console.error(`Error reading ${file}: ${err.message}`);
  }
});
