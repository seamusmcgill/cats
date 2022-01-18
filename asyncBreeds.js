const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // Run callback function if there's no error
    if (!error) {
      functionToRunWhenThingsAreDone(data);
    } else if (error) {
      functionToRunWhenThingsAreDone(undefined);
    }
  });
};

// Function to be ran once data is fetched
const printOutCatBreed = (breed) => {
  console.log("Return value: ", breed);
};

module.exports = breedDetailsFromFile;