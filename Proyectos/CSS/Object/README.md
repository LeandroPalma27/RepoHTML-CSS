### OBJECT FIT

#### object-fit: contain

Este tipo de object se utiliza para corregir problemas de resolucion de imagenes dentro de contenedores, con el objetivo de buscar cierta estilidad o forma por defecto o estetica a una imagen o recurso dentro de una caja.

Ejm:
```css
.caja{
    margin: 30px;
    width: 300px;
    height: 400px;
    display: flex;
    border: 2px solid red;
}

.caja img{
    width: 100%;
    height: 100%;
    object-fit:contain;
}
```
La imagen en cuestion, se ajusta al tamaño de la caja, al ser una imagen cuadrada, da un efecto desagradable al colocarla dentro de una caja con otras dimensiones, con esta propiedad, corregimos eso y le damos a la imagen la forma que tiene por defecto, ajustada a la resolucion de la caja.

#### object-fit: cover

Con este valor, en el caso contrario de que quisieramos ajustar una imagen al tamaño de una caja, pero conservando la forma y dimesion de esta, podemos conseguir un efecto muy agradable, pero se debe tener en cuenta que lo que sobra se recortara para poder ajustar la imagen al tamaño de la caja.

Si se recorta, el efecto de estiramiento se elimina.

Ejm:
```css
.caja2{
    margin: 30px;
    width: 200px;
    height: 300px;
    display: flex;
    border: 2px solid red;
}

.caja2 img{
    width: 100%;
    height: 100%;
    object-fit:cover;
}
```

#### object-fit: none

Con esto, conseguimos que la resolucion se mantenga a la de la imagen original. Si el contenedor tiene una resolucion diferente a la imagen, y existen partes de la imagen que quedan fuera, se recortaran.

#### object-fit: scale-down

Con este, comparamos entre contain y cover, y se selecciona la resolucion mas baja.


### OBJECT POSTIION

#### object-position

Con esta propiedad, lo que podemos hacer es que en caso de colocar un object-fit: contain, podemos modificar la ubicacion de la imagen ya que hay mucho espacio recortado (en caso de que la imagen haya sido mas grande que el contenedor), con lo cual es posible ajustar la imagen algo mas a la izquierda, derecha, abajo, etc. Tambien se le pueden dar valores absolutos o relativos como px, cm, etc.

Ejemplo con left y con medidas numericas:

```css

left:
.caja2 img{
    width: 100%;
    height: 100%;
    object-fit:cover;
    object-position: left;
}

valores numericos:
.caja2 img{
    width: 100%;
    height: 100%;
    object-fit:cover;
    object-position: 100px;
}

```
