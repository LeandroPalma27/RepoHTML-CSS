## PSEUDOCLASES

Las pseudoclases son palabras en clave que le indican a un selector que este la espera de algun estado, como pasar el mouse por encima, etc.

Al igual que los pseudoelementos, no existen en el DOM.

#### :hover

Esta pseudoclase especifica a un selector que en el caso de que el cursor sea pasado por su elemento en cuestion, cambie su estado y aspectos, como el background, la fuente, etc.

```css
div:hover{
    background: red;
}
```
**OJO: con esto podemos centrar texto dentro de un div**

```css
div{
display:table-cell;
vertical-align:middle;
text-align:center;
}
```

#### :link

Permite que un enlace en caso de no estar visitado, se muestre de un color o aspectos diferentes.

```css
a{
    display: block;
    margin: 20px;
    font-size:100px;
    color: blueviolet;
}
a:link{
    color:blue;
}
```

Aca, si no entramos al enlace, se mostrara azul, pero si entramos tomara su valor indicado en el selector sin el pseudoelemento.

#### :visited

Esta pseudoclase se le asigna a un selector de enlace (elemento a) para poder indicarle cambios en el aspecto visual luego de haber visitado el enlace que referenciaba el elemento en cuestion. No existe en el DOM.

```css
a{
    display: block;
    margin: 20px;
    font-size:100px;
}
a:link{
    color:blue;
}
a:visited{
    color:red;
}
```

#### :active

Esta modifica aspectos visuales de algun elemento en el DOM siempre y cuando se mantenga el click pulsado encima del elemento en cuestion.

```css
.contenedor1 {
    width: 200px;
    height: 200px;
    background-color: rgb(0, 0, 0);
    border: 4px solid rgb(165, 1, 1);
    box-sizing: border-box;
    color: white;
    font-weight: bold;
    font-size: 20px;
    display:flex;
    justify-content:center;
    vertical-align: middle;
    align-items: center;
    transition: 2s all;
    margin: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.contenedor1:active {
    background-color: rgb(230, 195, 44);
    width: 300px;
    height: 300px;
}
```

#### :focus

Sirve para cuando demos click a un elemento, este este seleccionado, con lo cual podemos cambiar el aspecto visual.

```css
input{
    display:block;
    width:160px;
    height:30px;
    background-color:rgb(255, 153, 0);
    transition: all 1s;
}
input:focus{
    background-color: crimson;
}
```

#### :lang()

Sirve para poder modificar aspectos visuales en base a un lenguaje asignado en el elemento html como "lang=es" por ejemplo, al utilizar la pseudoclase, utilizamos una funcion, esta debe recibir un parametro, y ese debe ser el lang indicado en elemento html.

Ejemplo con codigo html y css:

```html
<div class="contenedor2">
        <b lang="en">Hola como estas</b>
    </div>
```
Y en css, para modificar lo que indica el lang en, pondriamos lo siguiente:

```css
.contenedor2 b:lang(en) {
    color: blueviolet;
}
```
