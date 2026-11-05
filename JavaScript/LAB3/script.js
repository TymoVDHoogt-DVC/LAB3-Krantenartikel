let container = document.getElementById("container")

let panel = document.createElement("div")

container.appendChild(panel)

panel.classList.add("paneel")

function buttonCreate(kleur, klasse, tekst) {
    let button = document.createElement("button")

    panel.appendChild(button)

    button.textContent = tekst
    button.classList.add(klasse)

    button.addEventListener("click", function() {
        document.body.style.backgroundColor = kleur
    })
}

buttonCreate("green", "groen", "Groen")
buttonCreate("red", "rood", "Rood")
buttonCreate("blue", "blauw", "Blauw")