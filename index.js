function submitData(name, email) {
  return fetch("https://json-server-a3m4.onrender.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const newId = data.id;
      document.body.innerHTML += `<p>${newId}</p>`;
    })
    .catch((error) => {
      document.body.innerHTML += `<p>${error.message}</p>`;
    });
}
