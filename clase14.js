// Parametros y Argumentos
function getDouble (number) {
    return number * 2.3;
}

getDouble(10);

// Parametro defecto
function greet (person = 'strange') {
    console.log('Hello ' + person);
}

greet();
greet('Alex');