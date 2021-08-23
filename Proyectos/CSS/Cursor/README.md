### CURSOR

Esta propiedad sirve para poder modificar el tipo de cursor cuando navegemos por el DOM.

Se pueden usar para cuando pasemos el mouse por cajas, etc.

Se pueden combinar con pseudoclases como active, visited, etc.

#### Mas usados:

cursor pointer y cursor row-resize:

```css
.caja{
    margin: 30px;
    width: 300px;
    height: 300px;
    border: 4px solid red;
    background: pink;
    cursor: pointer;
}

.caja:active{
    cursor: row-resize;
}
```

Si lo pensamos, se podria combinar con funcionalidades JavaScript, asi que atentos con eso.

