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

El outline es lo mismo que border, pero no ocupa un sitio real en el DOM y no afecta a los demas elementos. Sea como sea conseguira esto ya que es algo primordial de la propiedad outline, si es capaz de poner el borde por detras de una caja, lo hara con tal de no afectar a cualquier elemento que este cerca y comprometa su tamaño. 

Un ejemplo de esto seria que cuando ponemos borde a un div y tenemos el box sizing en content-box, el tamaño de borde le quitaria espacio a la caja que esta debajo, y si fuera border-box, el espacio quitado seria a la caja que renderizo el borde en si misma. 

### POSITION 