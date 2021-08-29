### SELECTORES:

-Global = *{}

-Etiqueta = div{}

-Clase = .contenedor{}

-ID = #hola{}

-Atributo = [quechuchafuecasusita="sipe"]{}

-Descendencia = div .contenedor{}

-Pseudoclase y pseudoelementos = :hover{} o ::firstletter{}

Recuerda que se pueden combinar los tipos de selctores, especificamente cuando se habla de descendencia y pseudoclase.

``` css
*{
    color:rgba(119, 0, 255, 0.904);
}
h1{
    color:brown;
}
.parrafo{
    color: chocolate;
}
#causita{
    color: crimson;
}
[quechuchafuecasusita="sipe"]{
    color: goldenrod;
}

.parrafo b {
    color:lawngreen;
}

h3:hover{
    color: lightseagreen;
}

La clase hover permite que un elemento cambie el valor de la propiedad color cuando se pasa el mouse por encima.
```