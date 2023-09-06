function tempConvert() {
    if (document.getElementById('temp-unit1').value == 'celsius') {
        let m = document.getElementById('inputData').value;
        if (document.getElementById('temp-unit2').value == 'fahrenheit') {
            let n = (m * 9 / 5) + 32;
            document.getElementById('outputData').innerHTML = n;
        }
        else if (document.getElementById('temp-unit2').value == 'kelvin') {
            let n = parseInt(m) + 273.15;
            document.getElementById('outputData').innerHTML = n;
        }
        else if (document.getElementById('temp-unit2').value == 'celsius') {
            let n = m;
            document.getElementById('outputData').innerHTML = n;
        }
        else {
            alert('pls select correct input');
        }
    }
    else if (document.getElementById('temp-unit1').value == 'fahrenheit') {
        let m = document.getElementById('inputData').value;
        if (document.getElementById('temp-unit2').value == 'fahrenheit') {
            let n = m;
            document.getElementById('outputData').innerHTML = n;
        }
        else if (document.getElementById('temp-unit2').value == 'kelvin') {
            let n = ((parseInt(m) - 32) * 5 / 9) + 273.15;
            document.getElementById('outputData').innerHTML = n;
        }
        else if (document.getElementById('temp-unit2').value == 'celsius') {
            let n = (parseInt(m) - 32) * 5 / 9;
            document.getElementById('outputData').innerHTML = n;
        }
        else {
            alert('pls select correct input');
        }
    }
    else if (document.getElementById('temp-unit1').value == 'kelvin') {
        let m = document.getElementById('inputData').value;
        if (document.getElementById('temp-unit2').value == 'fahrenheit') {
            let n = ((parseInt(m) - 273.15) * 9 / 5) + 32;
            document.getElementById('outputData').innerHTML = n;
        }
        else if (document.getElementById('temp-unit2').value == 'kelvin') {
            let n = m;
            document.getElementById('outputData').innerHTML = n;
        }
        else if (document.getElementById('temp-unit2').value == 'celsius') {
            let n = parseInt(m) - 273.15;
            document.getElementById('outputData').innerHTML = n;
        }
        else {
            alert('pls select correct input');
        }
    }
    else {
        alert('pls select correct input');
    }
}