# Challenge de Promises

Construir una vista de ToDos que permite agregar, cambiar, terminar y borrar ToDos

Para correr el proyecto, hazle fork a este repo, clonano en tu local y corre `npm install` y `npm start`

## Estructura del Proyecto

* `components/` - Donde van los componentes visuales
* `api.js` - Funciones disponibles del API (no modificar!)
* `index.js` - Punto de entrada de la aplicacion, aqui es donde sucede el render principal (no modificar!)

## Entendiendo la clase `Component`

Cuando una clase extiende a la clase component este debe definir los metodos
* `draw()` - Solo retorna el elemento de jQuery que representa este componente
* `getContents()` - Retorna el contenido que va dentro del elemento, puede ser un elemento de jQuery,
otro componente, texto, o un array de la combinacion de las anteriores. E.g.

```js
getContents() {
  return [
    $('<button/>'),
    'Texto',
    new OtherComponent
  ];
}
```

Las clases que extienden a `Component` pueden usar el metodo `update()` para re-renderizar el componente,
se puede invocar en cualquier momento.

## Objetivo

- [ ] La app debe poder agregar todos usando el boton de "Add ToDo" correctamente (sin afectar a los demas)
- [ ] La app debe poder eliminar un ToDo al usar el boton
- [ ] La app debe poder marcar un ToDo como terminado, los ToDos terminados no son modificables
- [ ] La app debe poder guardar el texto de un ToDo

Para lograr esto solo hace falta cambiar los archivos de `ToDo.js` y `ToDoList`
