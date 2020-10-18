// ask.js
// replaced query selector because it kept returning Null
const imageInput = document.getElementsByClassName("image-input");
const textBox = document.getElementsByClassName("text-box");

const imageInputOut = document.getElementById("display-ask-image");
const textBoxOut = document.getElementById("display-ask-text");
/* you should probably add var arrays to collect every post
so that later you can post every post in a function like
for every post in posts: print(post) */
const postButton = document.getElementById("post-button");
// idk if you need these because you are already listening for buttons onclick
// imageInput.addEventListener("input", putIn);
// textBox.addEventListener("input", putIn);
// postButton.addEventListener("click", postThose);
postButton.addEventListener("click", function (e) {
  /* this is a storage name. It collects values and saves it to your
  computers local storage, also known as cookies. storage names should
  be unique because all browser can read them */
  const image = window.localStorage.getItem("our-special-img", this.value);
  // // this sets image to our value
  // const image = this.value
  const text = window.localStorage.getItem("our-special-txt", this.value);
  // const text = this.value
  // checks if the user inputed anything
  if (image || text) {
    // posts what's available
    console.log(image);
    console.log(text);
    imageInputOut.innerHTML(image);
    textBoxOut.innerHTML(text);
  } else {
    console.log("Could not find item");
  }
});
// function putIn(e) {}
// function postThose(e) {
//   return true
// }

// ------------------------------------------------------------------------

const imageInput = document.getElementsByClassName("image-input");
const textBox = document.getElementsByClassName("text-box");

const imageInputOut = document.getElementById("display-ask-image");
const textBoxOut = document.getElementById("display-ask-text");

const postButton = document.getElementById("post-button");

postButton.addEventListener("click", function (e) {
  const image = window.localStorage.getItem("our-special-img", this.value);

  const text = window.localStorage.getItem("our-special-txt", this.value);

  if (image || text) {
    console.log(image);
    console.log(text);
    imageInputOut.innerHTML(image);
    textBoxOut.innerHTML(text);
  } else {
    console.log("Could not find item");
  }
});
