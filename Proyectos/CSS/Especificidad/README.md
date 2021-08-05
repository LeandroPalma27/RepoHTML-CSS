### Especificidad
En css sabemos que el sistema de selectores funciona a traves de una cascada, por ejemplo si seleccionamos un elemento varias veces, con la propiedad de color cambiada en cada seleccion de ese elemento, en forma de cascada ira tomando cada valor hasta llegar al ultimo de todos.
Cuando nosotros definimos una jerarquia, no importa la teoria o como sientas que son las cosas, el que esta por encima de ti, estara por encima de ti siempre. De igual manera es en CSS, a traves de la especificidad podemos darle jerarquia a ciertos selectores para que estos actuen por encima de otros que en la teoria de cascada deben asumir el cambio otorgado.

A continuacion, las jerarquias se mostraran:

1. !Important

2. Estilos de linea

3. Identificadores (ID)

4. Clases, pseudoclases, atributos

5. Elementos, pseudoelementos

El important, se escribe de la siguiente manera, en cualquier tipo de selector:

```css
.cocafonky{
color: blue !important;
} 

```