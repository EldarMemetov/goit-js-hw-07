const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const data = {
      email: email,
      password: password,
    };

    console.log(data);

    form.reset();
  }
});
