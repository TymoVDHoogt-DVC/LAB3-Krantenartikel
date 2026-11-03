const dagen = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'];

// Alle dagen
let alledagen = dagen.join(", ");

console.log(
    "Alle dagen van de week zijn:\n ",
    alledagen)

// Alle werkdagen
let werkdagen = dagen.slice(0, 5).join(", ")

console.log(
    "Alle werkdagen van de week zijn:\n ",
    werkdagen
)

// Alle weekenddagen
let weekenddagen = dagen.slice(5, 7).join(", ")

console.log(
    "Alle weekend dagen zijn:\n ",
    weekenddagen
)

// Omgekeerde kopie van de lijst
const dagen_reversed = dagen.slice().reverse();

// Alle dagen, omgekeerd
let alledagen_reversed = dagen_reversed.join(", ")

console.log(
    "Alle dagen van de week, omgekeerd zijn:\n ",
    alledagen_reversed
)

// Alle werkdagen, omgekeerd
let werkdagen_reversed = dagen_reversed.slice(2, 7).join(", ")

console.log(
    "Alle werkdagen van de week, omgekeerd zijn:\n ",
    werkdagen_reversed
)

// Alle weekenddagen, omgekeerd
let weekenddagen_reversed = dagen_reversed.slice(0,2).join(", ")

console.log(
    "Alle weekend dagen, omgekeerd zijn:\n ",
    weekenddagen_reversed
)