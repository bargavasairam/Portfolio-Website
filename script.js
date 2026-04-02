document.addEventListener("DOMContentLoaded", function () {
  let controlofAdminLogin = document.getElementById("admin-login");

  document.getElementById("admin-link").addEventListener("click", function () {
    controlofAdminLogin.style.display = "block";
  });

  let controlofThemeBtn = document.getElementById("switch-theme");

  controlofThemeBtn.addEventListener('click', function () {
    document.body.classList.toggle("dark-theme");
  });

  let controlofAdminForm = document.getElementById("admin-form");

  controlofAdminForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let storedUsername = "admin";
    let storedPassword = "password";

    let username = document.getElementById("usernme").value;
    let password = document.getElementById("pswd").value;

    if (storedUsername === username && storedPassword === password) {
      alert("Access Granted!!");

      document.getElementById("admin-login").style.display = "none";
      document.getElementById("user-responses").style.display = "block";
      displayUserMessages();
    }
  });

  let controlOfContactmeForm = document.getElementById("contact-me-form");

  controlOfContactmeForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("msg").value;
    let date = new Date().toLocaleString();

    let response = { name, email, message, date };

    let DummyDatabase = JSON.parse(localStorage.getItem('tempDB')) || [];

    DummyDatabase.push(response);

    localStorage.setItem('tempDB', JSON.stringify(DummyDatabase));
    alert("Thank you for your message, hope you will wait, will get back to you shortly!");
    this.reset();
  });

  function displayUserMessages() {
    let ControlOfUserMessages = document.getElementById("user-messages");

    let DummyDatabase = JSON.parse(localStorage.getItem('tempDB')) || [];

    ControlOfUserMessages.innerHTML = ""; // clear old messages

    DummyDatabase.forEach(response => {
      let ControlOfResponseElement = document.createElement('div');

      ControlOfResponseElement.innerHTML = `
        <p> Name: ${response.name} </p>
        <p> Email: ${response.email} </p>
        <p> Message: ${response.message} </p>
        <p> Date: ${response.date} </p>
        <hr>
      `;
      ControlOfUserMessages.append(ControlOfResponseElement);
    });
  }
});
