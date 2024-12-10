document.getElementById("converter-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    let inputValue = parseFloat(document.getElementById("input-value").value);
    let inputUnit = document.getElementById("input-unit").value;
    let outputUnit = document.getElementById("output-unit").value;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    let result;

    // Convert input temperature to Celsius first
    let valueInCelsius;
    if (inputUnit === "Celsius") {
        valueInCelsius = inputValue;
    } else if (inputUnit === "Fahrenheit") {
        valueInCelsius = (inputValue - 32) * (5 / 9);
    } else if (inputUnit === "Kelvin") {
        valueInCelsius = inputValue - 273.15;
    }

    // Now convert from Celsius to the desired output unit
    if (outputUnit === "Celsius") {
        result = valueInCelsius;
    } else if (outputUnit === "Fahrenheit") {
        result = (valueInCelsius * (9 / 5)) + 32;
    } else if (outputUnit === "Kelvin") {
        result = valueInCelsius + 273.15;
    }

    // Display the result
    document.getElementById("converted-temperature").textContent = result.toFixed(2);
});
