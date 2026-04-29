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

// Ciclo 3 - debe tener al menos una mayuscula
test('rechaza password sin mayusculas', () => {
    const r = validarPassword('abcdefgh');
    expect(r.esValida).toBe(false);
    expect(r.errores).toContain('Debe tener al menos una mayuscula');
});

// Ciclo 4 - debe tener al menos una minuscula
test('rechaza password sin minusculas', () => {
    const r = validarPassword('ABCDEFGH');
    expect(r.esValida).toBe(false);
    expect(r.errores).toContain('Debe tener al menos una minuscula');
});

// Ciclo 5 - debe tener al menos un numero
test('rechaza password sin numeros', () => {
    const r = validarPassword('Abcdefgh');
    expect(r.esValida).toBe(false);
    expect(r.errores).toContain('Debe tener al menos un numero');
});

// Ciclo 6 - debe tener al menos un caracter especial
test('rechaza password sin caracteres especiales', () => {
    const r = validarPassword('Abcdefg1');
    expect(r.esValida).toBe(false);
    expect(r.errores).toContain('Debe tener al menos un caracter especial');
});

// Ciclo 7 - no debe contener espacios
test('rechaza password con espacios', () => {
    const r = validarPassword('Abcdef1!  ');
    expect(r.esValida).toBe(false);
    expect(r.errores).toContain('No debe contener espacios');
});

// Ciclo 8 - password valida no tiene errores
test('acepta password completamente valida', () => {
    const r = validarPassword('Abcdef1!');
    expect(r.esValida).toBe(true);
    expect(r.errores).toHaveLength(0);
});

// Ciclo 9 - no debe tener mas de 20 caracteres
test('rechaza password mayor a 20 caracteres', () => {
    const r = validarPassword('Abcdef1!xxxxxxxxxxxxxxxxxxx');
    expect(r.esValida).toBe(false);
    expect(r.errores).toContain('No debe superar los 20 caracteres');
});