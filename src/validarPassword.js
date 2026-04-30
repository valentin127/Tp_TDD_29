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

function noContieneUsername(password, username) {
    if (!username) return true;
    return !password.toLowerCase().includes(username.toLowerCase());
}

function noTieneConsecutivosIguales(password) {
    return !(/(.)\1\1/.test(password));
}

const REGLAS = [
    { check: tieneLongitudMinima,        mensaje: 'Debe tener al menos 8 caracteres' },
    { check: noSuperaLongitudMaxima,     mensaje: 'No debe superar los 20 caracteres' },
    { check: tieneMayuscula,             mensaje: 'Debe tener al menos una mayuscula' },
    { check: tieneMinuscula,             mensaje: 'Debe tener al menos una minuscula' },
    { check: tieneNumero,                mensaje: 'Debe tener al menos un numero' },
    { check: tieneCaracterEspecial,      mensaje: 'Debe tener al menos un caracter especial' },
    { check: noTieneEspacios,            mensaje: 'No debe contener espacios' },
    { check: noTieneConsecutivosIguales, mensaje: 'No debe tener 3 caracteres iguales consecutivos' },
];

function validarPassword(password, usernameOpcional) {
    const errores = REGLAS
        .filter(regla => !regla.check(password))
        .map(regla => regla.mensaje);

    if (!noContieneUsername(password, usernameOpcional)) {
        errores.push('No debe contener el nombre de usuario');
    }

    return { esValida: errores.length === 0, errores };
}

module.exports = { validarPassword };