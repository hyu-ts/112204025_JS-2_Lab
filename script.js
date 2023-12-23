// Function to start the script
function start() {
    var button = document.getElementById("rollButton");
    button.addEventListener("click", roll12Dice, false);
}

// Function to roll 12 dice
function roll12Dice() {
    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results

    for (var i = 0; i < 2; i++) { // Create 2 rows
        var diceRow = document.createElement("div");
        diceRow.classList.add("dice-row");

        for (var j = 0; j < 6; j++) { // Add 6 dice to each row
            var randomNumber = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6

            var dieImage = document.createElement("img");
            dieImage.src = "die" + randomNumber + ".png"; // Assuming the images are named as die1.png, die2.png, ..., die6.png
            dieImage.alt = "Die " + randomNumber;

            diceRow.appendChild(dieImage);
        }

        resultsContainer.appendChild(diceRow);
    }

    updateProbabilities();
}

// Function to display the probabilities of each face in a table
function updateProbabilities() {
    var frequencies = [0, 0, 0, 0, 0, 0]; // Array to hold the frequencies of each face

    var diceImages = document.querySelectorAll("#results img");
    diceImages.forEach(function (die) {
        var dieNumber = parseInt(die.src.substr(-5, 1)); // Extracting the number from the image filename
        frequencies[dieNumber - 1]++; // Increment the frequency for the corresponding face
    });

    var totalRolls = 12;
    var probabilities = "<table><tr><th>Face</th><th>Percent</th></tr>";
    for (var i = 0; i < frequencies.length; i++) {
        var probability = (frequencies[i] / totalRolls) * 100;
        probabilities += "<tr><td>" + (i + 1) + "</td><td>" + probability.toFixed(2) + "%</td></tr>";
    }
    probabilities += "</table>";
    var probabilitiesElement = document.getElementById("probabilities");
    probabilitiesElement.innerHTML = probabilities;
}

// Event listener for window load to start the script
window.addEventListener("load", start, false);
