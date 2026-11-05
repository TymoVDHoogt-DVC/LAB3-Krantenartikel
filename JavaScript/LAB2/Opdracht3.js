const arrayEen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrayTwee = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

function optellen(getal1, getal2) {
    for (let i = 0; i < 10; i++) {
        let resultaat_optellen = getal1[i] + getal2[i]
        console.log(resultaat_optellen)
    }
}

optellen(arrayEen, arrayTwee)

function aftrekken(getal1, getal2) {
    for (let i = 0; i < 10; i++) {
        let resultaat_aftrekken = getal1[i] - getal2[i]
        console.log(resultaat_aftrekken)
    }
}

aftrekken(arrayTwee, arrayEen)

function vermenigvuldigen(getal1, getal2) {
    for (let i = 0; i < 10; i++) {
        let resultaat_vermenigvuldigen = getal1[i] * getal2[i]
        console.log(resultaat_vermenigvuldigen)
    }
}

vermenigvuldigen(arrayEen, arrayTwee)

function delen(getal1, getal2) {
    for (let i = 0; i < 10; i++) {
        let resultaat_delen = getal1[i] / getal2[i]
        console.log(resultaat_delen)
    }
}

delen(arrayTwee, arrayEen)