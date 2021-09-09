console.group('Cuadrados');
// Codigo del cuadrado
const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perímetro del cuadrado mide: ' + perimetroCuadrado + 'cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El área del cuadrado mide: ' + areaCuadrado + 'cm2');
console.groupEnd();

//Codigo para el triangulo
console.group('Triangulos');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log('Los lados del triángulo miden: ' 
+ ladoTriangulo1 + 'cm,' 
+ ladoTriangulo2 + 'cm,' 
+ baseTriangulo + 'cm');

console.log('La atura del triángulo es :' + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log('El perímetro del triángulo es: ' + perimetroTriangulo + 'cms');

const areaTriangulo = (baseTriangulo * alturaTriangulo) /2;
console.log('El área del triángulo es: ' + areaTriangulo + 'cms2');

console.groupEnd();

//Codigo para el circulo
console.group('Circulos');
const radioCirculo = 4;
const diametroCirculo = radioCirculo*2;
const pi = Math.PI;
const perimetroCirculo = diametroCirculo * pi;
const areaCirculo = (radioCirculo *radioCirculo) * pi;

console.log('El radio del círculo es: ' + radioCirculo + 'cms');
console.log('El diámetro del círculo es: ' + diametroCirculo + 'cms');
console.log('El perímetro del círculo es: ' + perimetroCirculo + 'cms');
console.log('El área del círculo es: ' + areaCirculo + 'cms2');

console.groupEnd();


