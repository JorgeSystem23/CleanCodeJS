/*
 * Principio DRY ( No te repitas a ti mismo )
 * Don't repeat yourself
 * El principio DRY se asegura que cuando se detecte código duplicado, este sea
 * estraído a una clase o funcion para utilizarlo en donde se necesites
 */

// Codigo que se repite
const juanAverage = (90 + 50 + 70) / 3;
const alexAverage = (80 + 90 + 70 + 80) / 4;
const candeAverage = (40 + 100) / 2;

console.log(juanAverage, alexAverage, candeAverage);

function getAverage(...grades) {
  return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

const juanAverage2 = getAverage(90, 50, 70);
const alexAverage2 = getAverage(80, 90, 70, 80);
const candeAverage2 = getAverage(40, 100);

console.log(juanAverage2, alexAverage2, candeAverage2);
