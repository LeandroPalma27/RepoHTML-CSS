## PSEUDOELEMENTOS

Los pseudo elementos son aquellos elementos que modifican algo en particular, mas no existen en el DOM. Es como el outline, solo se aportan cambios visuales, mas no existencias particulares en el DOM.

Los pseudoelementos se aplican a los elementos, por lo menos generalmente. No tendria sentido aplicarlos solos porque no existen en el DOM.

DOM: Es la estructura de objetos que se van definiendo en base lo que el documento HTML indica al navegador.

#### ::first-line and first-letter

Pseudoelementos que funcionan solo en elementos de bloque, como block o inline-block. Mas facil, no funciona en elementos inline.

```css
div::first-line{
width: auto;
height: auto;
}
```

#### ::placeholder

Lo que hace este pseudoelemento es que al momento de maquetar un input, este contenga informacion descriptiva de lo que podria aceptar la entrada, con el pseudoelemento en CSS podemos modificar aspectos visuales como el color y el fondo del pseudoelemento.

```css
input::placeholder{
    color: gold;
    background: black;
}
```

#### ::selection

Lo que hace este pseudoelemento es poder modificar visualmente el color, tamaño, etc de una seleccion de texto en los elementos que pertenezcan al DOM.

```css
input::selection{
color:red;
background: green;
}
```

#### ::after and ::before

Estos pseudoelementos nos permiten poder agregar contenido a elementos de linea, que a su vez no existan en el DOM. Al querer seleccionarlos no se podra ya que como dije, en el DOM no existen como tal. Salen representados en el flujo como before y after.

Estos pseudo elementos requieren de un content para que tengan sentido usarlos, ejm:

```css
b::before{
    content: 'me baje';
    color: blueviolet;
}

b::after{
    content:'la ventana';
    color: brown;
}
```

Lo que indica el content se agregaria al elemento de linea en cuestion, before antes, y after despues.