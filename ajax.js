const CODE = "FUHZ21abc123"; 
const API_URL = "https://gpozx9-fuhz21.ptzal.hu/ajax.php";

// Adatok lekérése (Read)
function fetchData() {
  const bodyData = {
    op: "read",
    code: CODE
  };

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyData),
  })
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("dataList");
      const stats = document.getElementById("heightStats");
      container.innerHTML = "";
      let total = 0,
        max = 0;

      data.list.forEach((d) => {
        container.innerHTML += `<p>${d.name} – ${d.height}</p>`;
        const h = Number(d.height);
        total += h;
        if (h > max) max = h;
      });

      const avg = (total / data.list.length).toFixed(2);
      stats.innerHTML = `<p>Összeg: ${total}, Átlag: ${avg}, Legnagyobb: ${max}</p>`;
    });
}

// Új adat hozzáadása (Create)
function createData() {
  const name = document.getElementById("createName").value.trim();
  const height = document.getElementById("createHeight").value.trim();

  if (!name || !height || name.length > 30) return alert("Hibás mező!");

  const bodyData = {
    op: "create",
    code: CODE,
    name: name,
    height: height,
  };

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyData),
  }).then((res) =>
    res.ok
      ? document.getElementById("createMsg").textContent = "Sikeres hozzáadás!"
      : alert("Hiba!")
  );
}