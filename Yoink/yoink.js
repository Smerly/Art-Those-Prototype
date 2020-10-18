// function save() {
//   var new_data = document.getElementById("post-button").value;

//   if (localStorage.getItem("dataText") == null) {
//     localStorage.setItem("dataText", "[]");
//   }
//   var old_data = JSON.parse(localStorage.getItem("dataText"));
//   old_data.push(new_data);

//   localStorage.setItem("dataText", JSON.stringify(old_data));
// }

// function view() {}

// ---------------------------------------------------------------------------

const imageInput = document.querySelector("#image-input");
const textBox = document.querySelector("#text-box");

const imageInputOut = document.querySelector("#display-ask-image");
const textBoxOut = document.querySelector("#display-ask-text");

const postButton = document.querySelector("#post-button");

postButton.addEventListener("click", function (event) {
  //   const image = window.localStorage.getItem("our-special-img", this.value);

  //   const text = window.localStorage.getItem("our-special-txt", this.value);

  console.log("clicked");
  console.log(textBox.value);
  event.preventDefault();

  if (image || text) {
    console.log(image);
    console.log(text);
    imageInputOut.innerHTML(image);
    textBoxOut.innerHTML(text);
  } else {
    console.log("Could not find item");
  }
});
