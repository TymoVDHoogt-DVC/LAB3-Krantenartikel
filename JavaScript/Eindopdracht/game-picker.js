var games = [
    {
        "title": "Counter-Strike: Global Offensive",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "Dota 2",
        "price": 0.00,
        "genre": "MOBA",
        "rating": 3
    },
    {
        "title": "Goose Goose Duck",
        "price": 4.99,
        "genre": "Action",
        "rating": 2
    },
    {
        "title": "Apex Legends",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "PUBG: BATTLEGROUNDS",
        "price": 29.99,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Lost Ark",
        "price": 49.99,
        "genre": "Action",
        "rating": 1
    },
    {
        "title": "Grand Theft Auto V",
        "price": 29.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Call of Duty®: Modern Warfare® II | Warzone™ 2.0",
        "price": 19.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Team Fortress 2",
        "price": 0.00,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Rust",
        "price": 39.99,
        "genre": "Action",
        "rating": 5
    },
    {
        "title": "Unturned",
        "price": 0.00,
        "genre": "RPG",
        "rating": 1
    },
    {
        "title": "ELDEN RING",
        "price": 59.99,
        "genre": "RPG",
        "rating": 5
    },
    {
        "title": "ARK: Survival Evolved",
        "price": 10.00,
        "genre": "RPG",
        "rating": 1
    },
    {
        "title": "War Thunder",
        "price": 0.00,
        "genre": "Simulation",
        "rating": 2
    },
    {
        "title": "Sid Meier's Civilization VI",
        "price": 29.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "Football Manager 2023",
        "price": 59.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "Warframe",
        "price": 0.00,
        "genre": "Looter-shooter",
        "rating": 3
    },
    {
        "title": "EA SPORTS™ FIFA 23",
        "price": 59.99,
        "genre": "Sport",
        "rating": 1
    },
    {
        "title": "Destiny 2",
        "price": 0.00,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Red Dead Redemption 2",
        "price": 59.99,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Tom Clancy's Rainbow Six Siege",
        "price": 19.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "The Witcher 3: Wild Hunt",
        "price": 39.99,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Terraria",
        "price": 9.99,
        "genre": "Sandbox",
        "rating": 2
    },
    {
        "title": "Stardew Valley",
        "price": 14.99,
        "genre": "Sandbox",
        "rating": 1
    },
    {
        "title": "Left 4 Dead 2",
        "price": 9.99,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "Don't Starve Together",
        "price": 5.09,
        "genre": "RPG",
        "rating": 3
    },
    {
        "title": "MIR4",
        "price": 19.99,
        "genre": "RPG",
        "rating": 3
    },
    {
        "title": "PAYDAY 2",
        "price": 9.99,
        "genre": "Action",
        "rating": 2
    },
    {
        "title": "Path of Exile",
        "price": 0.00,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Project Zomboid",
        "price": 14.99,
        "genre": "Simulation",
        "rating": 4
    },
    {
        "title": "Valheim",
        "price": 19.99,
        "genre": "Sandbox",
        "rating": 5
    },
    {
        "title": "DayZ",
        "price": 44.99,
        "genre": "Simulation",
        "rating": 3
    }
]

console.log(games)


let totaaloverzicht = document.getElementById("totaaloverzicht")
let winkelmandje = document.getElementById("winkelmandje")

console.log(totaaloverzicht)
console.log(winkelmandje)

let winkelmandjeGames = []

function toonGames() {
    let titel = document.createElement("h2")
    titel.textContent = "Gamecatalogus"
    totaaloverzicht.appendChild(titel)
    for (let i = 0; i < games.length; i++) {
        console.log(games[i].title)
        // titel
        let gameElement = document.createElement("div")
        gameElement.textContent = games[i].title
        totaaloverzicht.appendChild(gameElement)
        // prijs
        let priceElement = document.createElement("div")
        priceElement.textContent = games[i].price
        gameElement.appendChild(priceElement)
        // genere
        let genreElement = document.createElement("div")
        genreElement.textContent = games[i].genre
        gameElement.appendChild(genreElement)
        // rating
        let ratingElement = document.createElement("div")
        ratingElement.textContent = games[i].rating
        gameElement.appendChild(ratingElement)
        // winkelmandje
        let winkelmandjeknop = document.createElement("button")
        winkelmandjeknop.textContent = "Voeg toe aan winkelmandje"
        gameElement.appendChild(winkelmandjeknop)
        winkelmandjeknop.addEventListener("click", function() {
    winkelmandjeGames.push(games[i])
    toonWinkelmandje()
    alert(games[i].title + " is toegevoegd aan je winkelmandje!")
    console.log(winkelmandjeGames)
})
    }
}

function toonWinkelmandje() {
    winkelmandje.textContent = ""
    let winkeltitel = document.createElement("h2")
    winkeltitel.textContent = "Winkelmandje"
    winkelmandje.appendChild(winkeltitel)
    for (let i = 0; i < winkelmandjeGames.length; i++) {
        let gamewinkelElement = document.createElement("div")
        gamewinkelElement.textContent = winkelmandjeGames[i].title
        winkelmandje.appendChild(gamewinkelElement)
        // prijs
        let prijsElement = document.createElement("div")
        prijsElement.textContent = winkelmandjeGames[i].price
        gamewinkelElement.appendChild(prijsElement)
}
// totaleprijs
        let totaleprijs = document.createElement("div")
        totaleprijs.textContent = "Totale Prijs: " + berekenPrijs()
        winkelmandje.appendChild(totaleprijs)
}

function berekenPrijs() {
    let totaalbedrag = 0
    for (let i = 0; i < winkelmandjeGames.length; i++) {
        totaalbedrag = totaalbedrag + winkelmandjeGames[i].price
}
return totaalbedrag
}
toonGames()