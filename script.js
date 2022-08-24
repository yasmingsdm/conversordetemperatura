function converteCelsius(){
    var valorCelsius = parseFloat(document.getElementById("tempCelsius").value)
    var resultadoFarenheit = ((valorCelsius/5)*9 + 32).toFixed(2)
    document.getElementById("valorFarenheit").innerHTML = resultadoFarenheit + "ºF"
    var resultadoKelvin = (valorCelsius + 273).toFixed(2)
    document.getElementById("valorKelvin").innerHTML = resultadoKelvin + "K"
    document.getElementById("valorCelsius").innerHTML = "  "
    document.getElementById("tempFarenheit").value = " "
    document.getElementById("tempKelvin").value = " "
}
function converteFarenheit(){
    var valorFarenheit = parseFloat(document.getElementById("tempFarenheit").value)
    var resultadoCelsius = ((valorFarenheit - 32)/9 *5).toFixed(2)
    document.getElementById("valorCelsius").innerHTML = resultadoCelsius + "ºC"
    var resultadoKelvin = ((valorFarenheit -32)/9 *5 +273).toFixed(2)
    document.getElementById("valorKelvin").innerHTML = resultadoKelvin + "K"
    document.getElementById("valorFarenheit").innerHTML = "  "
    document.getElementById("tempCelsius").value = " "
    document.getElementById("tempKelvin").value = " "
}
function converteKelvin(){
    var valorKelvin = parseFloat(document.getElementById("tempKelvin").value)
    var resultadoCelsius = (valorKelvin-273).toFixed(2)
    document.getElementById("valorCelsius").innerHTML = resultadoCelsius + "ºC"
    var resultadoFarenheit = ((valorKelvin - 273)/5 *9 +32).toFixed(2)
    document.getElementById("valorFarenheit").innerHTML = resultadoFarenheit + "ºF"
    document.getElementById("valorKelvin").innerHTML = "  "
    document.getElementById("tempFarenheit").value = " "
    document.getElementById("tempCelsius").value = " "
}