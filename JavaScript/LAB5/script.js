console.log("JavaScript werkt!")

fetch("opdracht1_bijlage.json")
    .then(response => response.json())
    .then(data => console.log(data))


