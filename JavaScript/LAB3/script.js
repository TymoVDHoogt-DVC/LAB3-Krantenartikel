let container = document.getElementById("container")

let panel = document.createElement("div")

container.appendChild(panel)

panel.classList.add("paneel")

let aantalButtons = 30

function buttonCreate(nummer) {
    let button = document.createElement("button")

    button.textContent = nummer
    button.classList.add("groen")

    let aantalKlikken = 0

    button.addEventListener("click", function() {
        aantalKlikken++
        if (aantalKlikken == 1) {
            button.classList.replace("groen", "rood")
        } else if (aantalKlikken == 2) {
            button.classList.replace("rood", "paars")
        } else if (aantalKlikken == 3) {
            button.classList.replace("paars", "blauw")
        } else if (aantalKlikken == 4) {
            button.classList.replace("blauw", "zwart")
        } else if (aantalKlikken == 5) {
            button.remove()
        }
    })

    return button
}

for (let i = 1; i <= aantalButtons; i++) {
    panel.appendChild(buttonCreate(i))
}