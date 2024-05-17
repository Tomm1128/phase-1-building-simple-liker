// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeBtns = document.querySelectorAll("span.like-glyph")
const errorBlock = document.querySelector("div#modal.hidden")

const handleError = err => {
  errorBlock.classList.remove("hidden")
  errorBlock.innerText = err 
  setTimeout(() => {
    errorBlock.className = "hidden"
  }, 3000)
}

const handleLikeBtn = event => {
  if(event.target.innerText === EMPTY_HEART){
    mimicServerCall()
    .then(() => {
      errorBlock.className = "hidden"
      event.target.className = "activated-heart" 
      event.target.innerText = FULL_HEART
    })
    .catch(handleError)
  } else {
    mimicServerCall()
    .then(() => {
      errorBlock.className = "hidden"
      event.target.className = "like-glyph"
      event.target.innerText = EMPTY_HEART
    })
    .catch(handleError)
  }
}

likeBtns.forEach(btn => btn.addEventListener("click", handleLikeBtn))

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
