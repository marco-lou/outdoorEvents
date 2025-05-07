
const { sum } = require('../assets/js/app'); // Supponiamo che la funzione da testare sia 'sum' nel file app.js

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});