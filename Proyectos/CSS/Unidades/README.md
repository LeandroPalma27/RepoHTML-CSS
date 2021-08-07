### Unidades de medida en CSS

En CSS existen dos tipos de unidades de medida, las relativas y las fijas.

Las relativas estan en funcion a cambios, es decir que son variables. Las fijas son unidades determinadas que no estan sujetas a cambios por ningun motivo.

#### Unidades fijas

Las unidades fijas son aquellas que se definen con una cantidad exacta como los px, los pt, cm, mm, etc.
Estas unidades no variaran su tamaño, lo cual las hace desfasadas en cierta medida al momento de crear una pagina web responsive.

#### Unidades relativas

Las unidades relativas son aquellas que variaran en funcion al tamaño determinado que el usuario tenga en su pantalla. 

Por ejemplo, si una persona observa una pagina desde su PC y luego lo hace desde un navegador en su telefono movil, es evidente que el tamaño de la pantalla puede que cambie, para eso lo que se hace es definir el tamaño de alguna medida como el tamaño de fuente, tamaño de pixeles, tamaño de cm, etc, dentro de la caja que contiene al contenido en cuestion. Posteriormente para cambiar ese contenido relativamente, se utiliza el termino de **"em"**, siendo este el que ira definiendo el tamaño en base a los cambios de resolucion en la pantalla que muestra la pagina web.

Ejm:

``` css
.content-form {
    font-size: 1px;
}

.content-form__h2 {
    font-size: 30em;
    text-align: center;
}
```

Aqui observamos que primero se definio un tamaño de fuente para todo contenido de letras en esa caja, siendo el tamaño de 1px. Luego con la medida **em**, se ira variando ese tamaño determinado si hay cambios de resolucion. En este caso, el tamaño seria de 30px, si se reduce medio pixel, el tamaño seria de 15px.

#### Viewport CSS

Cuando hablamos de viewport, se entiende que hacemos referencia al tamaño disponible de la resolucion de la pantalla donde mostramos la pagina web. Esta de escribe de la siguiente manera, y pertenece a teoria de cajas pero tambien sirve para todo el body que contiene la pagina.

Ejm:

```css
.content{
    width: 100vw;
    height: 100vh;
}
```

En este caso, al darle 100 de viewport width y 100 de viewport height, estamos diciendole al navegador que puede tomar el tamaño a partir del 100% de la resolucion dada, por ende si hay cambios, el tamaño se adapta, por ende es una pagina RESPONSIVA.

