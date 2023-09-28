const display = document.querySelector(".a11y-name");
const nameInput = document.querySelector("#name");
const form = document.querySelector("#a11y-form");

form.addEventListener("submit", handleFormSubmit);
function handleFormSubmit(event) {
  event.preventDefault();
  nameLong = nameInput.value.toUpperCase();
  a11yName();
}
function a11yName() {
  if (nameLong.length > 1) {
    shortName = `${nameLong[0]}${nameLong.length - 2}${
      nameLong[nameLong.length - 1]
    }`;
    console.log(shortName);
    display.textContent = shortName;
  } else {
    display.textContent = "Please Enter more than one character!";
  }
}
