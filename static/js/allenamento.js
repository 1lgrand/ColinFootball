function startAllenamento() {
    const colors = JSON.parse(localStorage.getItem('colori')); // Assicurati che colors sia un array
    const tempo = parseInt(localStorage.getItem('tempo'), 10) * 1000; // Converti in millisecondi
    let index = 0;

    console.log("Sono qui");

    setInterval(function() {

        index = randomNumber(0,colors.length)
        console.log(index)

        document.documentElement.style.backgroundColor = colors[index];

    }, tempo);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}