# HTTP Headers

Cada request y response HTTP envia consigo un grupo de cabeceras que pueden ser de interes para desarrollador. El objeto XHR tiene cabeceras para la request y para la response.

Por defecto, las siguientes cabeceras se envian con cada request XHR:
* _Accept_ -- Los content type que el navegador soporta.
* _Accept-Charset_ -- El juego de caracteres que el navegador puede mostrar.
* _Accept-Encoding_ -- Encoding de compresion soportados por el navegador.
* _Accept-Language_ -- El idioma/s que el navegador/usuario tiene elegidos.
* _Connection_ -- El tipo de conexion que el navegador esta haciendo al servidor.
* _Cookie_ -- Cualquier cookie establecida en la pagina.
* _Host_ -- El dominio de la pagina que realiza la request.
* _Referer_ -- La URI de la pagina desde la que se hace la request.
* _User-Agent_ -- La cadena de agente del navegador.

## setRequestHeader()

Se pueden establecer cabeceras personalizadas utilizando el metodo _setRequestHeader()_. El metodo acepta dos argumentos:
* El nombre de la cabecera
* El valor de la cabecera

_setRequestHeader()_ debe llamarse siempre despues de _open()_ pero antes de _send()_ :

```javascript
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if(xhr.readyState == 4) {
    if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      console.log(xhr.responseText);
    } else {
      console.log("Ha ocurrido un error " + xhr.status);
    }
  }
};

xhr.open("get", "ejemplo.php", true);
xhr.setRequestHeader("MiCabecera", "valorCabecera");
xhr.send(null);
```

## setRequestHeader() y getAllResponseHeaders()

El servidor podra por lo tanto leer los valores de estas cabeceras y actuar en consecuencia. No se recomienda en absoluto sobreescribir las cabeceras estandar. Utiliza las tuyas propias.

Puedes obtener las cabeceras de la response utilizando el metodo _getResponseHeader()_ pasandole como argumento el nombre de la cabecera a obtener.
Tambien se pueden obtener todas las cabeceras con _getAllResponseHeaders()_
