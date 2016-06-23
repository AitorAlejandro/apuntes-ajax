#GET Request

Es el tipo más comun de peticiones, la cual se realiza cuando se pide informacion de algun tipo al servidor. Si es necesario se le puede pasar argumentos a la petición en forma de query string. La query string se concatena a la URL. Esta query string debe ser codificada correctamente cuando se utiliza el método _open()_.

Uno de los errores más comunes en las peticiones GET es tener mal formateada la query string. Dentro de la query string cada nombre y valor debe codificarse utilizando el método _encodeURIComponent()_, y cada par nombre-valor debe separarse mediante un _ampersand_ *&*.

```javascript
xhr.open("get", "ejemplo.php?nombre1=valor1&nombre2=valor2", true);
```

La siguiente función ayuda a concatenar un par nombre-valor a una URL.

```javascript
function agregarParametroURL(url, nombre, valor) {
  url += (url.indexOf("?") == -1) ? "?" : "&";
  url += encodeURIComponent(nombre) + "=" + encodeURIComponent(valor);
  return url;
}
```

_agregarParametroURL()_ recibe tres argumentos:
* La URL a la que incluir el parámetro
* El nombre del parámetro
* El valor del parámetro

Esta función puede usarse para preparar una URL con parámetros para posteriormente hacer la petición GET.

```javascript
var url = "ejemplo.php";

url = agregarParametroURL(url, "nombre", "Aitor");
url = agregarParametroURL(url, "apellido", "Alejandro");

// ejemplo.php?nombre=Aitor&apellido=Alejandro
```
