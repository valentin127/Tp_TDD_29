function validarPassword(password) {
    const errores = [];

    if (password.length < 8) {
        errores.push('Debe tener al menos 8 caracteres');
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

    return { esValida: errores.length === 0, errores };
}

module.exports = { validarPassword };