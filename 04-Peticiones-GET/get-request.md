#GET Request

Es el tipo mas comun de peticiones, la cual se realiza cuando se pide informacion o datos de algun tipo al servidor. Si es necesario se le pueden pasar argumentos a la peticion en forma de query string. La query string se agrega a la URL. Esta query string debe ser codificada correctamente cuando se utiliza el metodo _open()_.

Uno de los errores mas comunes en las peticiones GET es tener mal formateada la query string. Dentro de la query string cada nombre y valor debe codificarse utiizando el metodo _encodeURIComponent()_, y cada par nombre valor debe separarse mediante un _ampersand_ *&*.

```javascript
xhr.open("get", "ejemplo.php?nombre1=valor1&nombre2=valor2", true);
```

La siguiente funcion ayuda a agregar un par nombre y valor a una URL.

```javascript
function agregarParametroURL(url, nombre, valor) {
  url += (url.indexOf("?") == -1) ? "?" : "&";
  url += encodeURIComponent(nombre) + "=" + encodeURIComponent(valor);
  return url;
}
```

_agregarParametroURL()_ recibe tres argumentos:
* La URL a la que incluir el parametro
* El nombre del parametro
* El valor del parametro

Esta funcion puede usarse para preparar un URL con parametros para posteriormente hacer la peticion GET.

```javascript
var url = "ejemplo.php";

url = agregarParametroURL(url, "nombre", "Aitor");
url = agregarParametroURL(url, "apellido", "Alejandro");

// ejemplo.php?nombre=Aitor&apellido=Alejandro
```
