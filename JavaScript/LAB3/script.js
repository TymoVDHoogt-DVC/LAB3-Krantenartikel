let container = document.getElementById("container")

let panel = document.createElement("div")

container.appendChild(panel)

panel.classList.add("paneel")

let aantalButtons = 30

function buttonCreate(nummer) {
    let button = document.createElement("button")

    button.textContent = nummer
    button.classList.add("groen")

    button.addEventListener("click", function() {
        button.classList.replace("groen", "rood")
    })

    return button
}

for (let i = 1; i <= aantalButtons; i++) {
    panel.appendChild(buttonCreate(i))
}