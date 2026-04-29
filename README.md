# Validador de Contraseñas - TP TDD POO2

## Descripción
Validador de contraseñas desarrollado con la metodología TDD (Test-Driven Development) para la materia Programación Orientada a Objetos 2.

## Reglas de validación
1. Debe tener al menos 8 caracteres
2. No debe superar los 20 caracteres
3. Debe contener al menos una letra mayúscula
4. Debe contener al menos una letra minúscula
5. Debe contener al menos un número
6. Debe contener al menos un símbolo especial
7. No debe contener espacios en blanco
8. Si se proporciona un username, la password no puede contenerlo (sin distinguir mayúsculas/minúsculas)
9. No debe contener 3 caracteres iguales consecutivos (ej: aaa, 111)

## Uso

```js
const { validarPassword } = require('./src/validarPassword');

const resultado = validarPassword('MiPass1!');
console.log(resultado.esValida);  // true
console.log(resultado.errores);   // []

const conUsername = validarPassword('juanPass1!', 'juan');
console.log(conUsername.esValida); // false