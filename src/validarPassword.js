function tieneLongitudMinima(password) {
    return password.length >= 8;
}

function noSuperaLongitudMaxima(password) {
    return password.length <= 20;
}

function tieneMayuscula(password) {
    return /[A-Z]/.test(password);
}

function tieneMinuscula(password) {
    return /[a-z]/.test(password);
}

function tieneNumero(password) {
    return /[0-9]/.test(password);
}

function tieneCaracterEspecial(password) {
    return /[^a-zA-Z0-9]/.test(password);
}

function noTieneEspacios(password) {
    return !/\s/.test(password);
}

function noTieneConsecutivosIguales(password) {
    return !(/(.)\1\1/.test(password));
}

function noContieneUsername(password, username) {
    if (!username) return true;
    return !password.toLowerCase().includes(username.toLowerCase());
}

const REGLAS = [
    { check: (p)    => tieneLongitudMinima(p),        mensaje: 'Debe tener al menos 8 caracteres' },
    { check: (p)    => noSuperaLongitudMaxima(p),     mensaje: 'No debe superar los 20 caracteres' },
    { check: (p)    => tieneMayuscula(p),             mensaje: 'Debe tener al menos una mayuscula' },
    { check: (p)    => tieneMinuscula(p),             mensaje: 'Debe tener al menos una minuscula' },
    { check: (p)    => tieneNumero(p),                mensaje: 'Debe tener al menos un numero' },
    { check: (p)    => tieneCaracterEspecial(p),      mensaje: 'Debe tener al menos un caracter especial' },
    { check: (p)    => noTieneEspacios(p),            mensaje: 'No debe contener espacios' },
    { check: (p)    => noTieneConsecutivosIguales(p), mensaje: 'No debe tener 3 caracteres iguales consecutivos' },
    { check: (p, u) => noContieneUsername(p, u),      mensaje: 'No debe contener el nombre de usuario' },
];

function validarPassword(password, usernameOpcional) {
    const errores = REGLAS
        .filter(regla => !regla.check(password, usernameOpcional))
        .map(regla => regla.mensaje);

    return { esValida: errores.length === 0, errores };
}

module.exports = { validarPassword };