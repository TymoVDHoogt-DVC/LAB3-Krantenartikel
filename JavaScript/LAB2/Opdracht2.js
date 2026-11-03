let aantalNamen;
while (true) {
    aantalNamen = Number(prompt("Hoeveel namen wil je opgeven (minimaal 3) "))

    if (aantalNamen < 3) {
        console.log("Dat is niet een mogelijk antwoord.")
        continue;
        }

    if (aantalNamen >= 3) {
        console.log("Jij hebt gekozen voor", aantalNamen, "namen.")
        break;
        }
    }

let namenlijst = []

for (let i = 0; i < aantalNamen; i++) {
    let namen = prompt("Wat is de naam?")
    namenlijst.push(namen)
}

let namenlijst_print = namenlijst.join(", ")
console.log(
    "De ingevoerde namen in de array zijn:\n ",
    namenlijst_print
)

let namenlijst_reversed = namenlijst.slice().reverse()

console.log(
    "De ingevoerde namen in de array, omgekeerd zijn:\n ",
    namenlijst_reversed
)