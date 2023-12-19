function muunnaLampotila() {
    var lampotilaInput = document.getElementById('lampotila');
    var tulosDiv = document.getElementById('tulos');
    var virheDiv = document.getElementById('virhe');
    var muunnosTyyppi = document.getElementById('muunnosTyyppi').value;
    var desimaalit = parseInt(document.getElementById('desimaalit').value);

    virheDiv.innerHTML = '';

    var lampotila = parseFloat(lampotilaInput.value);

    if (isNaN(lampotila)) {
        virheDiv.innerHTML = 'Virhe: Syötä kelvollinen lämpötila.';
        tulosDiv.innerHTML = '';
        return;
    }

    if ((muunnosTyyppi === 'celsiusFahrenheit' && lampotila < -273.15) ||
        (muunnosTyyppi === 'fahrenheitCelsius' && lampotila < -459.67)) {
        virheDiv.innerHTML = 'Huomio: Lämpötila on pienempi kuin absoluuttinen nollapiste.';
        tulosDiv.innerHTML = '';
        return;
    }

    var tulos = (muunnosTyyppi === 'celsiusFahrenheit') ? celsiusFahrenheitMuunnos(lampotila) : fahrenheitCelsiusMuunnos(lampotila);
    tulosDiv.innerHTML = 'Tulos: ' + tulos.toFixed(desimaalit);
}

function celsiusFahrenheitMuunnos(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitCelsiusMuunnos(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
