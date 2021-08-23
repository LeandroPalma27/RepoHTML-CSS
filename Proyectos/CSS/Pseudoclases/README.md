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

