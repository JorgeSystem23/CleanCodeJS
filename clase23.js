/*
 ** Notacion Big O
 * La Big O notation o también conocida como la notación Big O es la expresión matemática de cuánto se tarda en ejecutar
 * un algoritmo en función de la longitud de entrada, normalmente hablando del peor de los casos.
 * En la práctica se utiliza Big O para clasificar los algoritmos en función de cómo responden a los cambios en el tamaño
 * de la entrada, por lo que los algoritmos con la misma tasa de crecimiento se representan con la misma notación. El uso
 * de la letra O es porque la tasa de crecimiento de una función también se llama orden de la función.
 * Conocer Big O ayuda y facilita tu trabajo como desarrolladora al ser consciente de la eficiencia de un algoritmo que
 * se traduce en poder crear aplicaciones con un buen rendimiento.
 * Ahora exploremos los tipos más comunes de Big O al utilizar JavaScript +ES6.
 * \*
 * Algoritmo de tiempo constante: O(1)
 * \*
 * Este algoritmo es de orden uno y en este orden, independientemente de la complejidad, o sea, el número de elementos,
 * el tiempo es constante.
 * Esto se puede observar en los algoritmos que devuelven un elemento en una posición ya conocida de un array sin
 * importar el tipo o la longitud.
 *
 */

const getLast = (items) => items[items.length - 1];

getLast(["a", "b", "c", "d"]); //> d(1 iteración)
getLast(["a", "b", "c", "d", "e", "f", "g"]); //> g(1 iteración)

const findIndex = (items, match) => {
  for (let i = 0, total = items.length; i < total; i++)
    if (items[i] == match) return i;
  return -1;
};

const array = ["a", "b", "c", "d"];
findIndex(array, "a"); // 0  (1 iteración)
findIndex(array, "d"); // 3  (4 iteraciones)
findIndex(array, "e"); // -1 (4 iteraciones)

const buildSquareMatrix = (items) => {
  let matrix = [];
  for (let i = 0, total = items.length; i < total; i++) {
    matrix[i] = [];
    for (let j = 0, total = items.length; j < total; j++)
      matrix[i].push(items[j]);
  }
  return matrix;
};

buildSquareMatrix(["a", "b", "c"]);

/* 9 iteraciones para 3 elementos, retorna:
[
  ['a', 'b', 'c'],
  ['a', 'b', 'c'],
  ['a', 'b', 'c']
]
/** */

const quickSort = (list) => {
  if (list.length < 2) return list;
  let pivot = list[0];
  let left = [];
  let right = [];
  for (let i = 1, total = list.length; i < total; i++) {
    if (list[i] < pivot) left.push(list[i]);
    else right.push(list[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

quickSort(["q", "a", "z", "w", "s", "x", "e", "d", "c", "r"]);
// ["a", "c", "d", "e", "q", "r", "s", "w", "x", "z"]
