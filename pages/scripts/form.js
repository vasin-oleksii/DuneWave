document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "admin@gmail.com" && password === "admin") {
    window.location.href = "comptePerso.html";
  } else {
    alert("Identifiants incorrects");
  }
});
