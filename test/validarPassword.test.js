const { validarPassword } = require('../src/validarPassword');

// Ciclo 1 - la funcion existe y retorna la estructura correcta
test('retorna objeto con esValida y errores', () => {
    const r = validarPassword('cualquiercosa');
    expect(r).toHaveProperty('esValida');
    expect(r).toHaveProperty('errores');
    expect(Array.isArray(r.errores)).toBe(true);
});

// Ciclo 2 - minimo 8 caracteres
test('rechaza password menor a 8 caracteres', () => {
    const r = validarPassword('abc');
    expect(r.esValida).toBe(false);
    expect(r.errores).toContain('Debe tener al menos 8 caracteres');
});