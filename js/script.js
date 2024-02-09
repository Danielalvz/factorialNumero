// El factorial de un número entero positivo se define como el producto de todos los números naturales anteriores o iguales a él.
let inputNumero = document.getElementById("inputNumero");
let btnConvertir = document.querySelector(".btnConvertir");
let resultadosDiv = document.getElementById("resultados");

btnConvertir.addEventListener("click", factorialNumero);

function factorialNumero() {
    let numero = parseInt(inputNumero.value);

    // Limpiar el contenido previo
    resultadosDiv.innerHTML = "";

    let resultado = 1;
    
    for (let i = numero; i >= 1; i--) {
        resultado *= i;
        console.log(resultado);
    }

    if (isNaN(numero) || numero === "") {
        resultadosDiv.innerHTML = "<p>Ingresa un número válido</p>";
    } else {
        resultadosDiv.innerHTML += `<p>El resultado del factorial ${numero} es ${resultado}</p>`;
    }
}