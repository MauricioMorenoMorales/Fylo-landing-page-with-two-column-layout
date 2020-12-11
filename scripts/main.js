let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let inputAlert1 = document.getElementById("input-alert1");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.addEventListener("click", (e) => {
  if (e.target.matches("#button1")) {
    if (input1.value.match(mailformat)) {
      input1.classList.remove("input-active");
    } else {
      input1.classList.add("input-active");
      inputAlert1.classList.add("input-alert-active1");
    }
  }
  if (e.target.matches("#button2")) {
    if (input2.value.match(mailformat)) {
      input2.classList.remove("input-active");
    } else {
      input2.classList.add("input-active");
      inputAlert2.classList.add("input-alert-active");
    }
  }
});
