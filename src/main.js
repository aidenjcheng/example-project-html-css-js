const form = document.getElementById("email_form");
const output = document.getElementById("output");

form.addEventListener("submit", function (event) {
 event.preventDefault();
 const email = form.email.value.trim();

 output.innerHTML = email;
 // optional
 form.reset();
});
