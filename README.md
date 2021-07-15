## 1. Primeros pasos

**TIPOLOGIAS DE LOS SITIOS WEB**

**-Sitio web:** es una pagina o conjunto de paginas que funcionan de una manera simple ya predeterminada por el
 desarollador en cuestion, aunque algunas pueden variar entre lo estatico y dinamico, no son mas que simples 
 consultas para realizar comentarios, marcar notas, etc.

**-Aplicacion web:** Una aplicacion web es un conjunto de paginas pero con una mayor complejidad en su     funcionamiento.
 Por ejemplo, cuando estamos en paginas como Facebook, nos damos cuenta que existe un buscador, un muro en tiempo real (que en su funcionamiento incluye IA, igual en el buscador), un chat de texto con nuestros amigos, etc. Son esas tareas las que diferencian en la complejidad de un simple sitio web informativo por ejemplo. Youtube, Facebook,
 Netflix, Twitter, son ejemplos de varias aplicaciones web mas famosas en la red.

**-Pagina web:** Una pagina web conceptualmente refiere a un simple archivo html.

**COMPONENTES ESTANDAR DE UNA PAGINA WEB**

**HTML:** Es un lenguaje de marcado de hipertexto, que se utiliza para crear y estructurar paginas web. No es un lenguaje de programacion ya que funciona a traves de etiquetas, al contrario de un lenguaje de programacion, en este no se pueden construir algoritmos o pasos para resolver algo en especifico.

**CSS:** En español se traduce como hoja de estilos en forma de cascada. Basicamente css es un lenguaje de diseño que define una gran parte de la presentacion de un documento hecho en un lenguaje de marcado (html).

**JavaScript:** Es un lenguaje de programacion interpretado, soportado por los navegadores de forma nativa. Se utiliza para construir una logica de programacion a nuestros documentos html, generalmente en la parte superficial de nuestro documento.

![Esta es una imagen de ejemplo](https://p92.com/binaries/content/gallery/p92website/technologies/htmlcssjs-overview.png)

**PARTES DE UNA PAGINA WEB**

**Header o cabecera:** Es la parte en la que se toma toda la parte superior de una pagina web.

``` html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Facebook</title>
    <h1>HOLA</h1>
    <p>Esta es una prueba de lo que puede llegar a ser un header.</p>
</head>
```

**Contenido:** Es la parte principal de una pagina web. Es aqui donde se concentra la informacion mas importante de una pagina.

**Barra lateral:** Sirve para organizar el contenido de una pagina. Tambien se puede incluir otros tipos de material como banners, videos, etc.

``` html
<body>

    <!-- Sidebar -->
    <div class="w3-sidebar w3-light-grey w3-bar-block" style="width:25%">
        <h3 class="w3-bar-item">Menu</h3>
        <a href="#" class="w3-bar-item w3-button">Link 1</a>
        <a href="#" class="w3-bar-item w3-button">Link 2</a>
        <a href="#" class="w3-bar-item w3-button">Link 3</a>
    </div>
    <!-- Content -->
    <div style="margin-left:25%">
        <div class="w3-container w3-teal">
            <h1>My Page</h1>
        </div>
        <div class="w3-container">
            <img src="https://www.w3schools.com/w3css/img_car.jpg" alt="Car" style="width:50%" class="borde">
        </div>
    </div>

</body>
```
**Footer o pie de pagina:** Es netamente la parte inferior de la pagina, al igual que en la cabecera, se toma toda esa parte pero en este caso inferior para colocar informacion en especifico. Generalmente se usa para poner politicas de privacidad, correos electronicos para contacto, etc.

``` html
<footer>
    <center><small>Todos los derechos reservados. 2021 </small></center>
</footer>
``` 
**DATO EXTRA!!**

En el proceso recorde que para usar una hoja de estilos en un documento html, es necesario importarla de la siguiente manera:

``` html
<link rel="stylesheet" href="RUTA Y NOMBRE DEL ARCHIVO CSS" type="text/css">
```

Luego para posterior mente usar sus propiedades en cualquier etiqueta html que lo soporte, seria de la siguiente manera:

``` html

Suponiendo que quiero ponerle borde a una imagen

<img src="https://www.w3schools.com/w3css/img_car.jpg" alt="Car" style="width:50%" class="borde">

Dentro de un class colocariamos la propiedad que nos permite darle borde a una imagen.


```
PD: Asi se codifica una propiedad en CSS.

``` css
.borde {
    border-style:groove;
}
```
## 2. Desarrollo HTML

Al momento de desarrollar una pagina web HTML, debemos analizar si hace falta incluir codigo JavaScript, PHP, tecnologia AJAX, etc. Esto debido a que siempre es bueno agregar dinamismo a nuestras paginas, y son estas herramientas las que nos brindaran todas esas soluciones a nuestras necesidades dinamicas.

Es por eso que el codigo crece y a su vez se hace mas complejo, por ende puede que usuarios con versiones antiguas de navegadores puedan tener problemas por no tener soporte a estas tecnologias que se iran añadidiendo. Para solucionar eso debemos entender que existen maneras de parchear ciertos errores por compatibilidad u otras cosas, tambien existen herramientas que permiten soportar codigo nuevo en navegadores antiguos, ya sea de manera nativa o porteada. A ese proceso se le denomina **Cross-browsing** (soporte de navegacion entre varias versiones de navegadores).

### ¿Donde desarrollar nuestras paginas web?
Realmente existen tantas herramientas y software para el desarrollo de paginas web, que es dificil para alguien principiante escoger que software utilizar, asi que ire defrente por una recomendacion. Uilicen Visual Studio Code o cualquier otro editor de texto de su preferencia, ya que al ser tan ligeros son practicos y faciles de utlizar. Al desarrollar codigo HTML, CSS y JavaScript debemos tener en cuenta que son lenguajes interpretados asi que en teoria con cualquier editor de texto plano podriamos desarrollar paginas web, pero es importante tener en cuenta herramientas que nos permitan una codificacion mas limpia y eficiente.

### ¿Cual es la version actual y definitiva de HTML?
La version mas actual y estable es la verion 5, conociendose como HTML5. 
Debemos saber que tambien existe una variante al html con una sintaxis similar a la de html, llamada xhtml. La gran diferencia es que esta te obliga a tener una sintaxis mas estricta y mas ordenada.