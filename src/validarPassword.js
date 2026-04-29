function validarPassword(password, usernameOpcional) {
    const errores = [];

    if (password.length < 8) {
        errores.push('Debe tener al menos 8 caracteres');
    }

    if (password.length > 20) {
        errores.push('No debe superar los 20 caracteres');
    }

    if (!/[A-Z]/.test(password)) {
        errores.push('Debe tener al menos una mayuscula');
    }

    if (!/[a-z]/.test(password)) {
        errores.push('Debe tener al menos una minuscula');
    }

    if (!/[0-9]/.test(password)) {
        errores.push('Debe tener al menos un numero');
    }

    if (!/[^a-zA-Z0-9]/.test(password)) {
        errores.push('Debe tener al menos un caracter especial');
    }

    if (/\s/.test(password)) {
        errores.push('No debe contener espacios');
    }

    if (usernameOpcional && password.toLowerCase().includes(usernameOpcional.toLowerCase())) {
        errores.push('No debe contener el nombre de usuario');
    }

    if (/(.)\1\1/.test(password)) {
        errores.push('No debe tener 3 caracteres iguales consecutivos');
    }

    return { esValida: errores.length === 0, errores };
}

module.exports = { validarPassword };