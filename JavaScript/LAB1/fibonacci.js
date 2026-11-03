function berekenFibonacci(aantal) {
    let getal1 = 0
    let getal2 = 1
    let reeks = [];
    reeks.push(getal1, getal2)
    for (let i = 0; i < aantal - 2; i++) {
        let nieuwgetal = getal1 + getal2;
        reeks.push(nieuwgetal)
        getal1 = getal2;
        getal2 = nieuwgetal;
    }
    return reeks;
}

console.log(berekenFibonacci(20));