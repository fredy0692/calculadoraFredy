// Christian Andrés Quintero Mahecha CC: 1033721568
var btnSuma = document.getElementById("btnSuma")
var btnResta = document.getElementById("btnResta")
var btnMultiplicacion = document.getElementById("btnMultiplicacion")
var btnDivision = document.getElementById("btnDivision")
var resultado = document.getElementById("txtResultado")
var btnDivision = document.getElementById("btnDivision")

btnSuma.addEventListener("click", function () {
    realizarOperacion('suma');
});
btnResta.addEventListener("click", function () {
    realizarOperacion('resta');
});
btnMultiplicacion.addEventListener("click", function () {
    realizarOperacion('multiplicar');
});
btnDivision.addEventListener("click", function () {
    realizarOperacion('dividir');
});
function realizarOperacion(operacion) {

    var dato1 = document.getElementById("txtNumero1").value;
    var dato2 = document.getElementById("txtNumero2").value;
    var num1 = Number(dato1);
    var num2 = Number(dato2);
    var resultadoOperacion;

    if (operacion === 'suma') {
        resultadoOperacion = num1 + num2;
    }
    else if (operacion === 'resta') {
        resultadoOperacion = num1 - num2;
    }
    else if (operacion === 'multiplicar') {
        resultadoOperacion = num1 * num2;
    }
    else if (operacion === 'dividir')
    {
        if (num2 === 0)
        {           resultadoOperacion = 'error: no es posible dividir por cero';
            console.log(resultadoOperacion);
        }
        else {
            resultadoOperacion = num1 / num2;
             }       
        
    }
    resultado.value = resultadoOperacion;
    console.log(resultadoOperacion);
} 