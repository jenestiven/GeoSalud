
document.getElementById("gotogeoportal").addEventListener("click", () => {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;

  if (!username || !email) {
    window.alert("Por favor, completa todos los campos");
    return;
  }


  let login_data = {
      "username": username,
      "email": email
  }

  fetch("/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(login_data)
  })
  .then(response => response.text())
  .then(data => {
      window.location.href = data;
  });
});

