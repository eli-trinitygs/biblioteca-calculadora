// Codigo del cuadrado
// perimetro
function perimetroCuadrado(lado) {
    return lado * 4;
}
// area
function areaCuadrado(lado) {
    return lado * lado;
}
function calcularPerimetroCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    // alert(perimetro);
    const totalPerimetroCuadrado = document.getElementById('totalPerimetroCuadrado').innerHTML = `<h4>Perímetro: ${perimetro}</h4>`;
};

function calcularAreaCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    const area = areaCuadrado(value);
    const totalAreaCuadrado = document.getElementById('totalAreaCuadrado').innerHTML = `<h4>Área: ${area}</h4>`;
    
}

//Codigo para el triangulo
// perimetro
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// area
function areaTriangulo(base,altura) {
    return (base * altura) /2;
 }
 function calcularPerimetroTriangulo() {
    const inputLadoUno = parseInt(document.getElementById('InputLadoUno').value);
    const inputLadoDos = parseInt(document.getElementById('InputLadoDos').value);
    const inputBase = parseInt(document.getElementById('InputBase').value);
    const perimetro = perimetroTriangulo(inputLadoUno, inputLadoDos, inputBase);
    const totalPerimetroTriangulo = document.getElementById('totalPerimetroTriangulo').innerHTML = `<h4>Perímetro: ${perimetro}</h4>`
}
function calcularAreaTriangulo() {
    const inputBase = parseInt(document.getElementById('InputBase').value);
    const inputAltura = parseInt(document.getElementById('InputAltura').value);
    const area = areaTriangulo(inputBase, inputAltura);
    const totalAreaTriangulo = document.getElementById('totalAreaTriangulo').innerHTML = `<h4>Área: ${area}</h4>`
}

//Codigo para el circulo
// diametro
const PI = Math.PI;
const inputRadio = parseInt(document.getElementById('InputRadio').value);
function diametroCirculo(radio) {
    return radio * 2;
}
// perimetro
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// diametro
function calcularDiametroCirculo() {
    const diametro = diametroCirculo(inputRadio);
    const totalDiametro = document.getElementById('totalDiametroCirculo').innerHTML = `<h4>Diámetro: ${diametro}</h4>`;
}
// perimetro
function calcularPerimetroCirculo() {
    const perimetro = perimetroCirculo(inputRadio);
    const totalPerimetro = document.getElementById('totalPerimetroCirculo').innerHTML = `<h4>Perímetro: ${perimetro}</h4>`;
}
// area
function calcularAreaCirculo() {
    const area = areaCirculo(inputRadio);
    const totalArea = document.getElementById('totalAreaCirculo').innerHTML = `<h4>Área: ${area}</h4>`;
}


