'use strict';

function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('#dogForm').submit(event => {
    event.preventDefault();
    // this selects the value after the user 
    const userInput = $('.numPics').val();
    getDogImage(userInput);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});