//Jose Rivera Girata Cc.1052400502


var btnSuma = document.getElementById("btnSuma")
var btnResta = document.getElementById("btnResta")
var btnMultiplicacion = document.getElementById("btnMultiplicacion")
var btnDivision = document.getElementById("btnDivision")
var resultado = document.getElementById("txtResultado")

btnSuma.addEventListener("click", Sumar)

function Sumar() {
    var dato1 = document.getElementById("txtNumero1").value
    var dato2 = document.getElementById("txtNumero2").value

    var suma = Number(dato1) + Number(dato2)
    txtResultado.value = suma
    //console.log(suma)
}

btnResta.addEventListener("click", Restar)
function Restar() {
    var dato1 = document.getElementById("txtNumero1").value
    var dato2 = document.getElementById("txtNumero2").value

    var resta = Number(dato1) - Number(dato2)
    txtResultado.value = resta
    //console.log(resta)
}

btnMultiplicacion.addEventListener("click", Multiplicar)
function Multiplicar() {
    var dato1 = document.getElementById("txtNumero1").value
    var dato2 = document.getElementById("txtNumero2").value

    var multiplicacion = Number(dato1) * Number(dato2)
    txtResultado.value = multiplicacion
    // console.log(multiplicacion)
}
}

btnDivision.addEventListener("click", Dividir)
function Dividir() {
    var dato1 = document.getElementById("txtNumero1").value
    var dato2 = document.getElementById("txtNumero2").value

    var division = Number(dato1) / Number(dato2)
    txtResultado.value = division
    //console.log(division)
}