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

function save() {
  var new_data = document.getElementById("text-box").value;

  if (localStorage.getItem("dataText") == null) {
    localStorage.setItem("dataText", "[]");
  }
  var old_data = JSON.parse(localStorage.getItem("dataText"));
  old_data.push(new_data);

  localStorage.setItem("dataText", JSON.stringify(old_data));
}

function view() {}
