'use strict';

function getDogImage(dogBreed) {
  fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      
      if(responseJson.code===404){
        throw new Error("Breed not in list");
      }
      else{
      displayResults(responseJson);

      }
    }
    )
    .catch(error => alert(error.message))
  }

function displayResults(responseJson) {
  $('#dog-pic-container').html(
    `<img src="${responseJson.message}" class="numPics"/> `
  );
}



//display the results section
$('.results').removeClass('hidden');



function watchForm() {
  $('#dogForm').submit(event => {
    event.preventDefault();
    // this selects the value after the user 
    const userInput = $('.numPics').val();
    getDogImage(userInput);
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});