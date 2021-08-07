## Teoria de cajas

Cuando hablamos de cajas, debemos tener en cuenta que una caja en html es un elemento que ocupa toda una linea de renderizado en la pantalla, porque tambien hay elementos de linea, que tan solo ocupan el tamaño de su contenido en cuestion.

Ahora, que pasa si queremos convertir un elemento de linea en uno de bloque o visceversa, pues con al siguiente propiedad, podemos cambiar eso de la siguiente manera:

```css
h1{
    display: inline;
}
```

Siendo h1, un elemento de bloque, entonces cambiando el valor a la propiedad display, lo estamos haciendo un elemento de linea, si queremos hacerlo al reves, tan solo cambiamos el valor por:  

```css 
b{
    display: block;
}
```

Si le damos el valor de inline a un elemento de bloque, este automaticamente pierde sus propiedades de bloque, para solucionar esto, utilizamos el siguiente valor:

```css 
b{
    display: inline-block;
}
```

#### OJO:

La propiedad float nos ayuda a colocar un div pegado a cierta zona, como el lado derecho, dandonos la oportunidad de poder colocar un div a su costado.

EJM:

```css 
div{
    float: left;
}
```