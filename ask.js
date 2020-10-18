// const imageInput = document.querySelector("#image-input");
// const textBox = document.querySelector(".text-box");

// const imageInputOut = document.querySelector("#display-ask-image");
// const textBoxOut = document.querySelector("#text-box-out");

// const postButton = document.querySelector("#post-button");

// imageInput.addEventListener("input", putThose);
// textBox.addEventListener("input", putThose);
// postButton.addEventListener("click", postThose);

// function putThose(e) {
//   if (postButton.getElementById("button").clicked == true) {
//     const image = imageInput;
//     const text = textBox.nodeValue;

//     imageInputOut.innerHTML = image;
//     textBoxOut.innerHTML = text;
//   }
// }
// function postThose(e) {}

// ----------------------------------------------------------------------------------

const imgBox = document.querySelector("#image-url-input");
const textBox = document.querySelector("#text-box");
const postButton = document.querySelector("#post-button");

let userInputs = {};

postButton.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log(imgBox.value);
  // console.log(textBox.value);
  userInputs.url = imgBox.value;
  userInputs.question = textBox.value;
  // console.log(userInputs);
  localStorage.setItem("data", JSON.stringify(userInputs));
  // console.log(JSON.parse(localStorage.getItem('dataObject')));
});
