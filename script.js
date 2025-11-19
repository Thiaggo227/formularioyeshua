const scriptURL = "https://script.google.com/macros/s/AKfycbx0DRfQh8E7BsTXz0Hh6-q6Ryt_X2qRdiT4zQTfdDHUcqWZSEX4-LezAPvDZwVM5iEOIQ/exec";
const form = document.getElementById("form");
const msg = document.getElementById("msg");
const loading = document.getElementById("loading");

form.addEventListener("submit", e => {
    e.preventDefault();

    // Mostrar carregamento
    loading.style.display = "block";
    msg.innerHTML = "";

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then(response => {
            loading.style.display = "none";
            msg.innerHTML = "Inscrição enviada! ✔️";
            form.reset();
        })
        .catch(error => {
            loading.style.display = "none";
            msg.innerHTML = "Erro ao enviar inscrição ❌";
        });
});
