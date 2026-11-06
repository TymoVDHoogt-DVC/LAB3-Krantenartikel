let container = document.getElementById("container")

let panel = document.createElement("div")

container.appendChild(panel)

panel.classList.add("paneel")

let kleuren = ["groen", "rood", "paars", "blauw", "zwart"]

let aantalButtons = 30

function buttonCreate(nummer) {
    let button = document.createElement("button")

    button.textContent = nummer
    button.classList.add(kleuren[0])

    let aantalKlikken = 0

    button.addEventListener("click", function() {
        aantalKlikken++
        if (aantalKlikken === kleuren.length) {
            button.remove()
        } else {
            button.classList.replace(
                kleuren[aantalKlikken - 1],
                kleuren[aantalKlikken]
            )
        }
    })

    return button
}

for (let i = 1; i <= aantalButtons; i++) {
    panel.appendChild(buttonCreate(i))
}