const imageInput = document.querySelector("image-input");
const textBox = document.querySelector("text-box");

const imageInputOut = document.querySelector("display-ask-image");
const textBoxOut = document.querySelector("display-ask-text");

const postButton = document.querySelector("post-button");

imageInput.addEventListener("input", putIn);
textBox.addEventListener("input", putIn);
postButton.addEventListener("click", postThose);

if (postButton.getElementById("button").clicked == true) {
  textBox = textBoxOut;
  imageInput = imageInputOut;
}

function putIn(e) {}
