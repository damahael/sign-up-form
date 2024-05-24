const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm-password");
const button = document.querySelector("button");

console.log(password);

confirm.addEventListener("input", function () {
  if (confirm.value !== password.value) {
    document.documentElement.style.setProperty(
      "--content",
      '"*Passwords do not match"'
    );
    document.documentElement.style.setProperty("--check", '""');
    confirm.style.outline = "1px solid red";
    password.style.outline = "1px solid red";
    document.querySelector("button").disabled = true;
  } else if (
    confirm.value === password.value &&
    confirm.value.length >= 6 &&
    password.value.length >= 6
  ) {
    document.documentElement.style.setProperty("--content", '""');
    document.querySelector("button").disabled = false;
    password.style.outline = "1px solid green";
    confirm.style.outline = "1px solid green";
    document.documentElement.style.setProperty("--check", '"✔"');
  }
});
