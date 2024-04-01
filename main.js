// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const emptyHeart = document.querySelector(".empty-heart");
  const fullHeart = document.querySelector(".full-heart");
  const modal = document.querySelector(".modal");

  // Attach click event listener to the empty heart
  emptyHeart.addEventListener("click", function () {
    mimicServerCall()
      .then(() => {
        // Simulate server response success
        emptyHeart.classList.remove("activated-heart");
        fullHeart.classList.add("activated-heart");
      })
      .catch(() => {
        // Simulate server response failure
        modal.classList.remove("hidden");
        modal.querySelector(".error-message").textContent =
          "Server Error Message";
        setTimeout(() => {
          modal.classList.add("hidden");
        }, 3000);
      });
  });

  // Attach click event listener to the full heart
  fullHeart.addEventListener("click", function () {
    emptyHeart.classList.add("activated-heart");
    fullHeart.classList.remove("activated-heart");
  });
});

// Simulated server call function
function mimicServerCall() {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() < 0.5; // Simulate 50% success rate
    setTimeout(() => {
      if (isSuccess) {
        resolve();
      } else {
        reject();
      }
    }, 1000); // Simulate 1 second server response time
  });
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
