// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeBtns = document.querySelectorAll("span.like-glyph")
likeBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if(event.target.innerText === EMPTY_HEART){
      mimicServerCall()
      .then(() => {
        event.target.className = "activated-heart" 
        event.target.innerText = FULL_HEART
      })
      .catch((response) => {
        const errorBlock = document.querySelector("div#modal.hidden")
        errorBlock.classList.remove("hidden")
        errorBlock.innerText = response 
        setTimeout(() => {
          errorBlock.className = "hidden"
        }, 3000)
      })
    } else {
      mimicServerCall()
      .then(() => {
        event.target.classList.remove("activated-heart" )
        event.target.innerText = EMPTY_HEART
      })
      .catch((response) => {
        const errorBlock = document.querySelector("div#modal.hidden")
        errorBlock.classList.remove("hidden")
        errorBlock.innerText = response 
        setTimeout(() => {
          errorBlock.className = "hidden"
        }, 3000)
      })
    }
  })
})



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
