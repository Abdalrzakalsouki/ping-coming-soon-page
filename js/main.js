let input = document.getElementsByTagName("input")[0];
let valdationText = document.getElementById("valdiation");
let form = document.getElementById("form");

let regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "") {
    valdationText.innerText =
      "Whoops! It looks like you forgot to add your email";
    return false;
  } else if (input.value.match(regex) === null) {
    valdationText.innerText = "Please enter a valid email";
    return false;
  } else {
    valdationText.innerText = "Email had been submited sucessfuly!";
    valdationText.style.color = "#06c258";
    setInterval(() => {
      valdationText.innerText = "";
    }, 1000);
    return false;
  }
});
