const textTrigger = document.querySelector("#text-trigger");
const cards = document.querySelectorAll(".card");

// Cuando hago clic en el botón, aparece un texto en las cards

textTrigger.onclick = () => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].textContent = "Hola chicas";
    }
}

// Cuando hago clic en una card, cambia su color

for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = () => {
        cards[i].style.backgroundColor = "blue";
    }
}
