function validarPassword(password) {
    const errores = [];

    if (password.length < 8) {
        errores.push('Debe tener al menos 8 caracteres');
    }

    return { esValida: errores.length === 0, errores };
}

module.exports = { validarPassword };