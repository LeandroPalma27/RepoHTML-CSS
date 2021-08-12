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

### PADDING

El padding es una propiedad de css que aumenta el volumen de todos los lados de un elemento, es decir que el espacio entre el contenido de un elemento y sus bordes se ira rellenando en funcion al padding que nosotros coloquemos en nuestro proyecto.

Codigo para modificar el padding a todo desde una sola linea y con diferentes tamaños:

```css
*{
    padding: 10px 20px 30px 40px;
}
```

Modificandose en el siguiente orden respectivamente: Top, right, bottom y left.

### BOX SIZING (tambien width y height)

El box sizing es una propiedad que nos permite modificar el tamaño de una caja en funcion al padding ingresado, si queremos que el padding se relacione con el tamaño de la caja, por ejemplo si damos 100 de pt-pb y nuestra caja tiene 400 de height, lo que podria hacer esta propiedad (valor border-box) seria que se cumpla los 400px de alto y tambien los 100 de padding top y bottom. Esto se consigue ya que para calcular el valor faltante para los 400px de altura se toma en cuenta el relleno ya predefinido por el padding ingresado, dandonos un height de 400px, respetando el tamaño principal ingresado. 

Border-box (Relleno se toma en cuenta para el tamaño de la caja final):
```css
.contenedor{
    width: 300px;
    height: 300px;
    padding: 0px 50px;
    box-sizing: border-box;
}
```
Ese codigo arrojaria un valor final de height a la caja de 300px, ya que resta el relleno que en total seria 100px (top y bottom) y al valor de la altura para la caja le restaria esos 100px, dandonos por resultado un tamaño de 200px sin contar el padding.

Content-box (Agrega el relleno al valor ya predefinido por nosotros):
```css
.contenedor{
    width: 300px;
    height: 300px;
    padding: 0px 50px;
    box-sizing: content-box;
}
```
El codigo arrojaria un valor final de 400px de height, ya que a los 300px ya predefinidos, se les agregaron 50px de top y bottom, dandonos un valor final sumando todo de 400px.

### MARGIN

El margin es el espacio que hay de separacion entre elementos, o simplemente un espacio de margen que limita el posicionamiento de otros elementos frente al elemento al que le asignamos margin.

Codigo:
```css
.contenedor{
    width: 300px;
    height: 300px;
    padding: 0px 50px;
    margin: 10px;
}
```

### BORDER

El borde es lo que la palabra dice, el borde de un elemento, el cual podemos cambiar su radio, tamaño, color, diseño, etc.

Para realizar una sintaxis mas limpia y ligera, seria de la siguiente manera:
```css
.contenedor-parrafos {
    border-radius: 0em;
    border: 5px solid goldenrod;
}
```

OJO: La propiedad line-height sirve para que podamos cambiar el tamaño de espaciado entre linea para un texto.
OJO: La propiedad text-shadow sirve para que podamos ponerle sombra a un texto.

```css
p{
    text-shadow: 2px 2px 7px black;
}
```

### OUTLINE

El outline es lo mismo que border, pero no ocupa un sitio real en el DOM y no afecta a los demas elementos. Sea como sea conseguira esto ya que es algo primordial de la propiedad outline, si es capaz de poner el borde por detras de una caja, lo hara con tal de no afectar a el DOM y no ocupe espacio de este. 

Un ejemplo de esto seria que cuando ponemos borde a un div y tenemos el box sizing en content-box, el tamaño de borde le quitaria espacio a la caja que esta debajo, y si fuera border-box, el espacio quitado seria a la caja que renderizo el borde en si misma. 

### POSITION 

La propiedad position afecta al flujo de elementos html en el DOM, es decir, si se sigue el orden de una estructura como por ejemplo h1, div, h3, y luego cambiamos la posicion del div, el flujo del orden en el que estructuramos podria cambiar y ser div, h1, h3 o h1, h3 y div.

Basicamente, afectamos el posicionamiento inicial de un elemento html.

Debemos tener en cuenta que el posicionamiento no afecta en nada al tamaño principal o final de una caja o elemento html. Lo que sucede al darle margin, border o padding a un elemento, es que el tamaño principal que por ejemplo era de 300px x 300px, termine siendo afectado por las otras propiedades afectadas, dandonos un tamaño final de la caja cambiado. Al usar un position, solo afectamos la posicion del elemento asignandole espacio ya sea en top, bottom, right o left, pero es un espacio que cualquier otra caja puede ocupar, lo que agregamos seria un espacio no real por asi decirlo.

SI UNA CAJA TIENE MARGIN 10PX CON UN TAMAÑO PRINCIPAL DE 100PX, EL TAMAÑO FINAL DEL ELEMENTO SERIA 120PX (CON EL CONTENT-BOX), SI LE DAMOS BOX SIZING DE BORDER BOX, EL TAMAÑO PRINCIPAL SE REDUCIRIA A 80PX CON TAL DE CUMPLIR CON EL TAMAÑO PRINCIPAL DE 100PX.

AHORA, SI LE DAMOS POSITION A UN ELEMENTO, NADA SE AGREGARA NI NADA SE QUITARA, ES SOLO EL CAMBIO EN EL FLUJO/POSICIONAMIENTO DEL ELEMENTO, ESE ESPACIO PUEDE SER OCUPADO POR OTRO ELEMENTO TRANQUILAMENTE.

OJOOOOOOOOOOOOOO: Las propiedades del position mas importantes son el top y e left.

#### Position: relative

Cuando a la propiedad position le damos un valor relativo, lo que hace el elemento es, en caso de ser movido por ejemplo 20px hacia abajo, lo hara, pero conservando el espacio del posicionamiento que tenia al principio.

Es decir o mejor dicho, supongamos que una caja tenia un tamaño cuadrado de 100px, y le damos un position relative con un top de 100px, pues lo que dara como resultado el dom, es que la caja efectivamente se movera 100px hacia abajo, pero el espacio que el posicionamiento principal tenia se mantendra.

Sintaxis:

```css
.caja1{
    width: 100px;
    height: 100px;
    position: relative;
    top: 100px;
}
```

#### Z-index

En fisica, al dibujar algo nuevo despues de otro, se sobre entiende que este objeto nuevo estara por encima del otro. De igual manera pasa en el DOM y flujo de la estructura de una pagina html, pero, en caso de que posicionemos un elemento, automaticamente el flujo cambia y el orden del DOM tambien, esto parte de la teoria basica de position.

Simplificando, si le damos valor a la propiedad position de cualquier elemento, este automaticamente adquiere una nueva propiedad llamada Z-INDEX, es esta la que modifica el flujo en un plano cartesiano con vista tridimensional.

Muy aparte del posible flujo cambiado de arriba, abajo, izquierda o derecha, tambien es posible que se cambie el flujo tridimensional de los elementos, o sease mejor dicho, que se vera por encima de cada cosa, si el primer elemento o el segundo, asi relativamente con cualquier grupo de elementos.

Sintaxis:

```css
.caja1{
    width: 100px;
    height: 100px;
    position: relative;
    top: 100px;
    z-index: 50;
}
```

PROBLEMATICA PADRE-HIJO: En el caso del z-index, cuando colocamos un div dentro de otro, este seria como el elemento hijo del div que lo contiene. Esto generaria un conflicto de posicionamiento z-index.

Para solucionar esto, lo que hariamos es darle z-index con valor negativo al div HIJO, para que este se posicione por debajo de su PADRE.

OJO: La propiedad opacity sirve para cambiar el valor de opacidad del elemento en cuestion.

#### Position: absolute

Este valor para la propiedad position, quiere decir que el espacio que ahora ocupara el elemento en cuestion ya no esta reservado, ahora es independiente y puede fluctuar donde quiera y como quiera, ya que es ABSOLUTO, estara ahi porque es asi, porque asi esta escrito en la linea de tiempo. Ahora es una parte mas de la pantalla.

Sease mejor dicho, el elemento que tenga una posicion absoluta se convierte en una especie de cortina que tapa el DOM. El DOM seria relativo y la cortina jamas.

Sintaxis:

```css
.cajita{
    background-color: red;
    width: 100px;
    position: absolute;
}
```
###### OJOOOOOOOO
OJOOOO: El posicionamiento de relative parte desde el espacio que ocupa, mientras que el absolute, parte desde el viewport.

OJOOOO2: Un posicionamiento absoluto siempre va a tomar como referencia el viewport, pero si queremos que tome como referencia a la caja que contiene al elemento posicionado absolutamente, debemos darle posicionamiento relativo al contenedor del contenido en cuestion (elementos caja que son contenido dentro de un contenedor).

OJOOOO3: El posicionamiento relative le da una caracteristica de opacidad al color de fondo de cualquier elemento absoluto en el DOM. Literal, actua como una ventana.

#### Position: fixed

Es lo mismo que absolute, con la diferencia de que se quedara fija en el DOM, asi que si se mueve el scroll, el elemento permanecera en pantalla sea como sea, a diferencia de que si no lo tuviera.

Si no fuera fixed, el elemento simplemente dejaria de renderizarse para posterioremente renderizar lo que indica el flujo de elementos html.

EN QUE CASOS SE USARIA:

-BARRAS DE NAVEGACION FIJAS (ojo con la de apple y su problematica de la barra de navegacion que actua como ventana literal nivel dios y para colmo le da un efecto borroso a lo que queda detras joder que genial.)
-PUBLICIDAD
-ETC

```css
.cajita{
    background-color: red;
    width: 100px;
    position: fixed;
}
```

#### Position: sticky

Es una mezcla entre fixed y relative, osea, conserva el espacio que tiene al principio y su posicion parte de ahi.

Otra cosa: Tener en cuenta que al tener propiedades de relative, conservara su espacio. Entonces si le damos un top de 100px, a partir de cubrir esos 100px con el scroll el elemento actuara como un fixed.

ATENTO A ESTO.


```css
.cajita{
    background-color: red;
    width: 100px;
    position: sticky;
}
```

