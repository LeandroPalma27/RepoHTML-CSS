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

**Header o cabecera:** Es la parte en la que se toma toda la parte superior de una pagina web. Esta sección contiene directivas que el navegador necesita para leer el documento correctamente. Entre estos elementos, encontramos el título de la página, las meta etiquetas, las funciones JavaScript y los enlaces de referencia.


``` html
Como se veria una cabecera donde incluyo el uso de una hoja de cascada y un archivo javascript para añadir funcionalidades:

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/Proyectos/Html-1/Styles/Estilos.css" type="text/css">
    <script src="js/index.js" type="text/javascript"></script>
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
**DATO EXTRA SEGUN WIKIPEDIA!!**

La etiqueta ***meta*** podría ser utilizada por los robots de búsqueda para incluirla en las bases de datos de sus buscadores y mostrarla en el resumen de búsquedas o tenerla en cuenta durante las mismas. Estas meta tags son invisibles para los visitantes. Estas meta etiquetas también se usan para especificar cierta información técnica de la cual pueden valerse los navegadores para mostrar la página, como el grupo de caracteres usado, tiempo de expiración del contenido, posibilidad de dejar la página en cache o calificar el contenido del sitio ("para adultos", "violento", etc.). 

En el pasado, si un sitio web no contaba con las meta tags, era muy difícil obtener posiciones relevantes en el buscador, ***sin embargo actualmente las meta tags no son primordiales para posicionarse***, ya que hay otros factores de mayor importancia.

## 2. Desarrollo HTML

Al momento de desarrollar una pagina web HTML, debemos analizar si hace falta incluir codigo JavaScript, PHP, tecnologia AJAX, etc. Esto debido a que siempre es bueno agregar dinamismo a nuestras paginas, y son estas herramientas las que nos brindaran todas esas soluciones a nuestras necesidades dinamicas.

Es por eso que el codigo crece y a su vez se hace mas complejo, por ende puede que usuarios con versiones antiguas de navegadores puedan tener problemas por no tener soporte a estas tecnologias que se iran añadidiendo. Para solucionar eso debemos entender que existen maneras de parchear ciertos errores por compatibilidad u otras cosas, tambien existen herramientas que permiten soportar codigo nuevo en navegadores antiguos, ya sea de manera nativa o porteada. A ese proceso se le denomina **Cross-browsing** (soporte de navegacion entre varias versiones de navegadores).

### ¿Donde desarrollar nuestras paginas web?
Realmente existen tantas herramientas y software para el desarrollo de paginas web, que es dificil para alguien principiante escoger que software utilizar, asi que ire defrente por una recomendacion. Uilicen Visual Studio Code o cualquier otro editor de texto de su preferencia, ya que al ser tan ligeros son practicos y faciles de utlizar. Al desarrollar codigo HTML, CSS y JavaScript debemos tener en cuenta que son lenguajes interpretados asi que en teoria con cualquier editor de texto plano podriamos desarrollar paginas web, pero es importante tener en cuenta herramientas que nos permitan una codificacion mas limpia y eficiente.

### ¿Cual es la version actual y definitiva de HTML?
La version mas actual y estable es la verion 5, conociendose como HTML5. 
Debemos saber que tambien existe una variante al html con una sintaxis similar a la de html, llamada xhtml. La gran diferencia es que esta te obliga a tener una sintaxis mas estricta y mas ordenada.

- Su extension de archivo es la siguiente: "Nombre del archivo"**.xhtml**
- Asi se veria un Hello World en XHTML:

``` html
<html xmlns="http://www.w3.org/1999/xhtml">

<body>
    <h1>HOLA MUNDO</h1>
</body>

</html>
```
##### **DATO EXTRA!!**
Cada version de HTML ha sido una revision de la anterior, partiendo desde la 2da version, algunas cosas se modificaron como ciertas etiquetas y se agregaron otras. Esto tambien afecto a CSS, ya que algunas etiquetas que se quitaron se agregaron a los archivos CSS, es decir que ahora para realizar ciertos diseños, se harian desde hoja de cascada.

Ejemplo de atributos eliminados que ahora corren por cuenta de CSS:
- Align
- Alink, link, text, vlink **(en el elemento body)**
- Background **(en el elemento body)**
- Border
- Frame **(en el elemento table)**

**¿QUE SIGNIFICA LA ETIQUETA DOCTYPE?**
La etiqueta ***doctype*** indica el tipo de documento al navegador para que a este se le resulte mas facil interpretarlo, sobre todo respecto a la version.

Se declara de la siguiente manera:

``` html
<!DOCTYPE html>
```
## 3. Escribiendo codigo HTML

#### **ETIQUETAS**
Cuando queremos escribir codigo html debemos tener en cuenta el hecho de que es un lenguaje de marcado y que funciona a traves de etiquetas, es por eso que hay que estar atentos a la norma de codificacion para la estructura de nuestro sitio web. 

La etiquetas siempre se definen con una apertura y un cierre, casi en tu totalidad de tipos de eitquetas. Ejemplos de ellas serian:

``` html
<h1>Hola</h1>
<p>Este es un parrafo de texto.</p>
<ul>Esta es una lista.</ul>
<u>Esta etiqueta me permite subrayar texto.</u>
```
Como se observa, siempre se inicia y se cierra incluyendo una diagonal en el cierre.

#### **ATRIBUTOS**
Los atributos en html ***son referencias y directivas*** que podemos incluir a una etiqueta de html, con la cual podemos definir valores y que estos nos permitan darles caracteristicas en particular ***(a las etiquetas)***. Todo atributo contiene un valor, ya sea numerico o no, y este debe estar siempre cerrado entre comillas dobles.

Algunas de las cosas que se pueden agregar son de caracter estetico como la altura, color, posicion, etc. Tambien podemos asignar una identidad que sea interpretada por codigo JavaScript, tambien podemos hacer referencia a directamente cualquier recurso como un enlace web, un archivo JavaScript, un jsp, un html, un css, etc. 

Ejemplos:

``` html
Contenedor con atributo para estilos (desde un CSS y con una propiedad como valor en el atributo sytle):
<div class="container" style="margin-top:150px; padding:20px;" ></div>

Script para inyectar un archivo JavaScript que le de dinamismo a nuestra pagina web:
<script src="js/index.js" type="text/javascript"></script>

Etiqueta de enlace para utilizar una hoja de cascada en etiquetas que esten dentro del body, a traves de un atributo class:
<link rel="stylesheet" href="/Proyectos/Html-1/Styles/Estilos.css" type="text/css">

Etiqueta de enlace a un archivo .html:
<a href="registrarse.html">Registrarme</a>

Etiqueta de enlace para utilizar una libreria de css para nuestra pagina web, tambien se utiliza el atributo rel para indicar de que trata el enlace utilizado:
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

Etiqueta de entrada donde utilizamos atributos para indicar para que se usa la entrada, que tipo de entrada es (en este caso de tipo password para la seguridad) y un identificador de referencia para que una inyeccion de JavaScript la identifique y sepa que hacer con aquella entrada:
<input placeholder="Contraseña" type="password" id="pass">
```

###### **CONCLUSION!!**
Debemos tener en cuenta que Cuando declaramos por completo la etiqueta, podemos observar, entonces, cuatro interventores: ***la etiqueta propiamente dicha, los atributos, los valores de los atributos y el contenido en cuestion*** como en el siguiente ejemplo:

``` html
<etiqueta atributo1="" atributo2="">Contenido en cuestion.</etiqueta>
```
#### **TIPOS DE ETIQUETAS**

Existen etiquetas de linea y de bloque, la diferencia entre ellas es que las de linea ocupan solo el espacio que necesitan para mostrar su contenido en cuestion, mientras que las de bloque ocupan todo el espacio que se les de disponible y ocuparan eso, asi no este toda el area llena de contenido en cuestion. Si la linea de marcado anterior ya esta ocupada, tomaran la siguiente porque las etiquetas de bloque toman lineas nuevas si o si.

Ejemplo:

``` html

CASO 1
Por ejemplo, en este caso en una misma linea del DOM, 
hemos marcado una etiqueta "a" y despues de tomar el 
espacio necesario para mostrar el contenido en cuestion, 
se marco la etiqueta "small", donde tambien se esta tomando 
solo el espacio que ocupa el contenido en cuestion, quedando 
espacio libre en esa misma linea del DOM.
<body>
    <a href="https://facebook.com">Entra a nuestro facebook!!</a> <small>Todos los derechos reservados.</small>
</body>

CASO 2
En este caso vemos como a pesar de poner un boton y un enlace 
de etiqueta "a", estos se rendrizan en la siguiente linea y 
no en el espacio que queda de la anterior. Eso se debe a que 
hemos colocado ese marcado dentro de un div, siendo la etiqueta 
div la que es de tipo bloque, por lo tanto va a ocupar una linea 
nueva y marcara el espacio necesario para las etiquetas que estan 
dentro del div.
<body>
    <a href="https://facebook.com">Entra a nuestro facebook!!</a> <small>Todos los derechos reservados.</small>

    <div>
        <a href="https://twitter.com">Entra a twitter</a>
        <button type="button" onclick="facebook();">FACEBOOK</button>
    </div>
</body>

```
#### **ETIQUETAS MAS USADAS EN HTML**

Realmente no hay una manera de definir las etiquetas mas usadas, ya que eos dependera mucho que cada persona y de que tipo de pagina web estan desarrollando. Existen un grupo de etiquetas fundamentales de dominar como la etiqueta div o etiquetas para listas, formularios y tablas. 

Mucho mas alla de eso es bueno profundizar en las etiquetas que son las principales, a continuacion mostrare en codigo html con algunos ejemplos:

``` html
<div class="">
    Para un parrafo:
      <p>
          <p style="font-weight: bold;">¿Que es un lenguaje compilado?</p><br>
          Un lenguaje compilado es aquel que necesita ser trasformado a lenguaje 
          de maquina a traves de la compilacion. 
      </p>
      Para una lista simple:
      <ul>
          <li>Uno</li>
          <li>Dos</li>
          <li>Tres</li>
          <li>Cuatro</li>
          <li>Cinco</li>
      </ul>
      Para una lista enumerada:
      <ol>
        <li>Uno</li>
        <li>Dos</li>
        <li>Tres</li>
        <li>Cuatro</li>
        <li>Cinco</li>
    </ol>
  </div>
```
##### DATO EXTRA!!!
El atributo alt, presente en la etiqueta img, sirve para indicar que tipo de imagen estamos mostrando, en caso de que por alguna razon esta no se cargue en el dom.

#### **ATRIBUTOS MAS USADOS EN HTML**

Dentro de los atributos mas usados podemos encontrar a los siguientes:

ID = Sirve como identificador unico para una etiqueta, con el fin de que codigo JavaScript lo interprete y realice acciones especificas sobre esta.

CLASS = Sirve para referenciar una clase o lista de clases. Estas son interpretadas por documentos CSS o JavaScript, como por ejemplo alguna propiedad de estilo en CSS o alguna funcion especifica codificada en JS a traves del metodo de js:

``` js
var elemento_para_funcion = document.getElementsByClassName(Funcion1);
```
STYLE = Sirve para indicar de manera directa alguna propiedad de CSS.

TITLE = Añade titulo a un elemento/etiqueta, en caso de que pasemos el mouse por el elemento se visualizara el titulo.

##### **ATRIBUTOS DE EVENTOS EN HTML**
Cuando hablamos de eventos en HTML, nos referimos a aquellos atributos que se consideran una accion o funcion como tal, como por ejemplo el atributo de dar click (onClick), siendo ese un evento en html, que generalmente cargara una accion o funcion JavaScript puesta en el documento HTML en cuestion, indicada por una funcion.

Ejemplo:
``` html
<button id="botonEnviar" type="button" onClick="enviarPag();">Enviar</button>
<script type="text/javascript">
function enviarPag() {
window.location = "https://facebook.com";
}
</script>
```
##### **ATRIBUTOS DE SELECCION EN HTML**
Cuando queremos centrarnos en un especifico elemento html del dom y seleccionarlo, podemos usar atributos de seleccion como el ***accesskey*** o el ***onfocus***, el primero para acceder a traves de los atajos del navegador (en chrome es alt + la tecla de atajo colocada en el accesKey) y el segundo para realizar una accion en el elemento que estamos haciendo foco.

Ejemplo:

``` html
accesskey:
<input placeholder="Ingrese su nombre" type="text" accesskey="n">
onfocus:
<input id="idFoto" placeholder="Ingrese su contraseña" type="password" accesskey="p"
    onfocus="myFunction(this.id);"><br>
  <script type="text/javascript">
    function myFunction(x) {
      document.getElementById(x).style.background = "blue";
    }
  </script>
onblur:
<input id="idApellido" placeholder="Ingrese su apellido" type="text" onblur="myFunction2();">
```
``` js
La funcion en javascript:
function myFunction2() {
      var contenido = document.getElementById("idApellido").value;
      if (contenido != undefined) {
        console.log(contenido);
      } else {
        console.log("XD");
      }
    }
```

## 4. Introduccion al HTML semantico