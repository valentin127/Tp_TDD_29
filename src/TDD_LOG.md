# TDD Log - Validador de Contraseñas

## Ciclo 1 - Estructura base
- **Red:** Test que verifica que la función retorna objeto con `esValida` y `errores`
- **Green:** Función retorna `{ esValida: true, errores: [] }`
- **Refactor:** -

## Ciclo 2 - Longitud mínima
- **Red:** Test que rechaza password menor a 8 caracteres
- **Green:** Validación de longitud mínima con `password.length < 8`
- **Refactor:** -

## Ciclo 3 - Mayúscula
- **Red:** Test que rechaza password sin mayúsculas
- **Green:** Validación con regex `/[A-Z]/`
- **Refactor:** -

## Ciclo 4 - Minúscula
- **Red:** Test que rechaza password sin minúsculas
- **Green:** Validación con regex `/[a-z]/`
- **Refactor:** -

## Ciclo 5 - Número
- **Red:** Test que rechaza password sin números
- **Green:** Validación con regex `/[0-9]/`
- **Refactor:** -

## Ciclo 6 - Carácter especial
- **Red:** Test que rechaza password sin caracteres especiales
- **Green:** Validación con regex `/[^a-zA-Z0-9]/`
- **Refactor:** -

## Ciclo 7 - Sin espacios
- **Red:** Test que rechaza password con espacios
- **Green:** Validación con regex `/\s/`
- **Refactor:** -

## Ciclo 8 - Password válida
- **Red:** Test que acepta password que cumple todas las reglas
- **Green:** Lógica existente ya lo cubría
- **Refactor:** -

## Ciclo 9 - Longitud máxima
- **Red:** Test que rechaza password mayor a 20 caracteres
- **Green:** Validación de longitud máxima con `password.length > 20`
- **Refactor:** -

## Ciclo 10 - Múltiples errores
- **Red:** Test que verifica acumulación de múltiples errores
- **Green:** Lógica existente ya lo cubría
- **Refactor:** -

## Ciclo 11 - Solo espacios
- **Red:** Test que rechaza password compuesta solo de espacios
- **Green:** Lógica existente ya lo cubría
- **Refactor:** -

## Ciclo 12 - Username (contiene)
- **Red:** Test que rechaza password que contiene el username
- **Green:** Validación con `includes` case insensitive
- **Refactor:** -

## Ciclo 13 - Username (case insensitive)
- **Red:** Test que rechaza password con username en mayúsculas
- **Green:** Uso de `toLowerCase()` en ambos lados
- **Refactor:** -

## Ciclo 14 - Consecutivos iguales
- **Red:** Test que rechaza password con 3 caracteres iguales consecutivos
- **Green:** Validación con regex `/(.)\1\1/`
- **Refactor:** -

## Ciclo 15 - Consecutivos (caso borde)
- **Red:** Test que acepta password con solo 2 caracteres iguales seguidos
- **Green:** Regex `/(.)\1\1/` solo matchea 3 o más
- **Refactor:** Extracción de cada validación a función individual