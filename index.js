// RESUELVE LOS EJERCICIOS AQUÍ

// --- MAP ---

// 1. Elevar cada número a sí mismo
const numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados() {
  return numbers.map(num => num ** num);
}

// 2. Frases según el país y comida
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
const result2 = foodList.map(comida => {
  if (comida === 'Pizza') return 'Como soy de Italia, amo comer Pizza';
  else if (comida === 'Ramen') return 'Como soy de Japón, amo comer Ramen';
  else if (comida === 'Paella') return 'Como soy de Valencia, amo comer Paella';
  else return 'Aunque no como carne, el Entrecot es sabroso';
});

// 3. Staff con frases
const staff = [
  { name: 'Pepe', role: 'The Boss', hobbies: ['leer', 'ver pelis'] },
  { name: 'Ana', role: 'becaria', hobbies: ['nadar', 'bailar'] },
  { name: 'Luis', role: 'programador', hobbies: ['dormir', 'comprar'] },
  { name: 'Carlos', role: 'secretario', hobbies: ['futbol', 'queso'] }
];
const result3 = staff.map(
  persona =>
    `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`
);

// --- FILTER ---

// 4. Números impares
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter(num => num % 2 !== 0);

// 5. Platos veganos
const foodList2 = [
  { name: 'Tempeh', isVeggie: true },
  { name: 'Cheesbacon burguer', isVeggie: false },
  { name: 'Tofu burguer', isVeggie: true },
  { name: 'Entrecot', isVeggie: false }
];
const result5 = foodList2
  .filter(plato => plato.isVeggie === true)
  .map(plato => {
    const adjetivo = plato.name === 'Tofu burguer' ? 'rica' : 'rico';
    return `Que ${adjetivo} ${plato.name} me voy a comer!`;
  });

// 6. Inventario > 300 €
const inventory = [
  { name: 'Mobile phone', price: 199 },
  { name: 'TV Samsung', price: 459 },
  { name: 'Viaje a Cancún', price: 600 },
  { name: 'Mascarilla', price: 1 }
];
const result6 = inventory
  .filter(item => item.price > 300)
  .map(item => item.name);

// --- REDUCE ---

// 7. Multiplicación de todos los elementos
const numeros3 = [39, 2, 4, 25, 62];
const result7 = numeros3.reduce((acc, num) => acc * num, 1);

// 8. Concatenar palabras
const sentenceElements = [
  'Me',
  'llamo',
  'David',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];
const result8 = sentenceElements.reduce((acc, palabra) => acc + ' ' + palabra);

// 9. Suma de precios de libros 'code'
const books = [
  { name: ' JS for dummies', author: 'Emily A. Vander Veer', price: 20, category: 'code' },
  { name: 'Don Quijote de la Mancha', author: 'Cervantes', price: 14, category: 'novel' },
  { name: 'Juego de tronos', author: 'George R. Martin', price: 32, category: 'Fantasy' },
  { name: 'javascript the good parts', author: 'Douglas Crockford', price: 40, category: 'code' }
];
const result9 = books
  .filter(libro => libro.category === 'code')
  .reduce((acc, libro) => acc + libro.price, 0);
