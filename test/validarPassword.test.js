const { validarPassword } = require('../src/validarPassword');

// Ciclo 1 - la funcion existe y retorna la estructura correcta
test('retorna objeto con esValida y errores', () => {
    const r = validarPassword('cualquiercosa');
    expect(r).toHaveProperty('esValida');
    expect(r).toHaveProperty('errores');
    expect(Array.isArray(r.errores)).toBe(true);
});