const REGLAS = [
    { check: p     => p.length >= 8,                                     mensaje: 'Debe tener al menos 8 caracteres' },
    { check: p     => p.length <= 20,                                    mensaje: 'No debe superar los 20 caracteres' },
    { check: p     => /[A-Z]/.test(p),                                   mensaje: 'Debe tener al menos una mayuscula' },
    { check: p     => /[a-z]/.test(p),                                   mensaje: 'Debe tener al menos una minuscula' },
    { check: p     => /[0-9]/.test(p),                                   mensaje: 'Debe tener al menos un numero' },
    { check: p     => /[^a-zA-Z0-9]/.test(p),                           mensaje: 'Debe tener al menos un caracter especial' },
    { check: p     => !/\s/.test(p),                                     mensaje: 'No debe contener espacios' },
    { check: p     => !(/(.)\1\1/.test(p)),                              mensaje: 'No debe tener 3 caracteres iguales consecutivos' },
    { check: (p,u) => !u || !p.toLowerCase().includes(u.toLowerCase()), mensaje: 'No debe contener el nombre de usuario' },
];

function validarPassword(password, usernameOpcional) {
    const errores = REGLAS
        .filter(regla => !regla.check(password, usernameOpcional))
        .map(regla => regla.mensaje);

    return { esValida: errores.length === 0, errores };
}

module.exports = { validarPassword };