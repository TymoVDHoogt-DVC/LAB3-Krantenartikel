let container = document.getElementById("container")

let panel = document.createElement("div")

container.appendChild(panel)

panel.classList.add("paneel")

function buttonCreate(kleur, klasse, tekst) {
    let button = document.createElement("button")

    button.textContent = tekst
    button.classList.add(klasse)

    button.addEventListener("click", function() {
        document.body.style.backgroundColor = kleur
    })

    return button
}

panel.appendChild(buttonCreate("green", "groen", "Groen"))
panel.appendChild(buttonCreate("red", "rood", "Rood"))
panel.appendChild(buttonCreate("blue", "blauw", "Blauw"))