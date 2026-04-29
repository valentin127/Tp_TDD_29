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

function validarPassword(password, usernameOpcional) {
    const errores = [];

    if (!tieneLongitudMinima(password))
        errores.push('Debe tener al menos 8 caracteres');

    if (!noSuperaLongitudMaxima(password))
        errores.push('No debe superar los 20 caracteres');

    if (!tieneMayuscula(password))
        errores.push('Debe tener al menos una mayuscula');

    if (!tieneMinuscula(password))
        errores.push('Debe tener al menos una minuscula');

    if (!tieneNumero(password))
        errores.push('Debe tener al menos un numero');

    if (!tieneCaracterEspecial(password))
        errores.push('Debe tener al menos un caracter especial');

    if (!noTieneEspacios(password))
        errores.push('No debe contener espacios');

    if (!noContieneUsername(password, usernameOpcional))
        errores.push('No debe contener el nombre de usuario');

    if (!noTieneConsecutivosIguales(password))
        errores.push('No debe tener 3 caracteres iguales consecutivos');

    return { esValida: errores.length === 0, errores };
}

module.exports = { validarPassword };