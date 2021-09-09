console.group('Cuadrados');
// Codigo del cuadrado
const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log('El perímetro del cuadrado mide: ' + perimetroCuadrado + 'cm');

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log('El área del cuadrado mide: ' + areaCuadrado + 'cm2');
console.groupEnd();

//Codigo para el triangulo
console.group('Triangulos');
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log('Los lados del triángulo miden: ' 
// + ladoTriangulo1 + 'cm,' 
// + ladoTriangulo2 + 'cm,' 
// + baseTriangulo + 'cm');

// console.log('La atura del triángulo es :' + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log('El perímetro del triángulo es: ' + perimetroTriangulo + 'cms');

function areaTriangulo(base,altura) {
    return (base * altura) /2;
 }
// console.log('El área del triángulo es: ' + areaTriangulo + 'cms2');

console.groupEnd();

//Codigo para el circulo
console.group('Circulos');

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// const radioCirculo = 4;
// const diametroCirculo = radioCirculo*2;
// const pi = Math.PI;
// const perimetroCirculo = diametroCirculo * pi;
// const areaCirculo = (radioCirculo *radioCirculo) * pi;

// console.log('El radio del círculo es: ' + radioCirculo + 'cms');
// console.log('El diámetro del círculo es: ' + diametroCirculo + 'cms');
// console.log('El perímetro del círculo es: ' + perimetroCirculo + 'cms');
// console.log('El área del círculo es: ' + areaCirculo + 'cms2');

console.groupEnd();


