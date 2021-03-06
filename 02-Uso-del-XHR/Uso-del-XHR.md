#Uso del XHR

Para empezar a utilizar el objeto XHR, primero se tiene que llamar a su método _open()_, el cual acepta tres argumentos:

1. El tipo de request a enviar ("get", "post", etc).
2. La URL a la que llamar.
3. Un boolean que indica si la request debe realizarse de modo asíncrono.

```javascript
xhr.open("get", "ejemplo.php", true);
```

El código anterior abre una request asíncrona hacia _ejemplo.php_.

A considerar que:
1. la URL es relativa a la página desde la que sea hace la llamada, aunque también se puede utilizar una ruta absoluta.
2. La llamada a _open()_ no realizar realmente la request, simplemente prepara la request para ser enviada.
3. Solo se puede acceder URLs que existan en el mismo origen, entiendo como tal el mismo dominio, utilizando el mismo puerto, y con el mismo protocolo. Si la URL no cumple lo anterior, se lanzará un mensaje de seguridad.

Para enviar la request es necesario llamar el método _send()_ de la siguiente manera:
```javascript
xhr.open("get", "ejemplo.php", true);
xhr.send(null);
```

El método _send()_ acepta un solo argumento, que es la información a enviar en el cuerpo de la petición. Si no se necesita cuerpo para enviar datos se le debe pasar _null_, ya que este argumento es obligatorio en algunos navegadores. Cuando se llama al _send()_ es cuando la request viaja hacia al servidor.

Como la request es asíncrona, el código de javascript no esperará a la respuesta para continuar la ejecución del programa, el cual seguirá de inmediato con la siguiente instrucción a ejecutar.

Cuando la respuesta se recibe, las propiedades del objeto XHR se rellenan con información. Las propiedad relevantes son:
* _responseText_ -- El texto que se retorna como cuerpo de la response.
* _responseXML_ -- Contiene un documento XML con la información de la response, siempre que la response contenga su content type establecido como _"text/xml"_ o _"application/xml"_.
* _status_ -- El código HTTP de la response.
* _statusText_ -- La descripción del codigo HTTP de la response.

Cuando se recibe la respuesta, el primer paso es comprobar la propiedad _status_ para asegurarnos que la respuesta ha sido satisfactoria. Generalmente, los códigos HTTP dentro de los 200s con consideradas satisfactorios y se esperará que algún contenido esté disponible en la propiedad _responseText_, o en la propiedad _responseXML_ si el content type de la response es el adecuado. Si _status_ es 304 indica que el recurso no ha sido modificado y que está recogiéndose de la cache del navegador.
Para asegurarnos que la response ha sido recibida correctamente deberemos comprobar la propiedad _status_ de la siguiente manera:

```javascript
xhr.open("get", "ejemplo.php", true);
xhr.send(null);

if ( (xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
  console.log(xhr.responseText);
} else {
  console.log("Ha ocurrido un error: " + xhr.status);
}
```
Es siempre recomendable utilizar la propiedad _status_ y no la propiedad _statusText_ ya que esta última puede variar según el navegador.

Como curiosidad decir que no se aconseja utilizar el codigo HTTP 204 porque en algunos navegadores antiguos puede dar lugar a errores y/o se normaliza a un 200.

El objeto XHR tiene la propiedad _readyState_ que indica en que fase de la request/response nos encontramos. Los posibles valores que puede tener son:
* 0 -- Uninitialized. El método _open()_ no ha sido llamado aún.
* 1 -- Open. El método _open()_ ha sido llamado pero no el _send()_.
* 2 -- Sent. El método _send()_ ha sido llamado pero la response no ha sido recibida.
* 3 -- Receiving. Parte de la response ha sido recibida pero no entera.
* 4 -- Complete. Toda la información de la response ha sido recibida y está disponible.

Cada vez que la propiedad _readyState_ cambia de un valor a otro, se lanza el evento _readystatechange_. Se utiliza este evento para comprobar el valor de _readyState_. Normalmente, el valor que nos interesa es el *4*, que es el que indica que la response está disponible. Por compatibilidad de navegadores se suele utilizar el _onreadystatechange_ handler de la siguiente manera:

```javascript
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    if ( (xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      console.log(xhr.responseText);
    } else {
      console.log("Ha ocurrido un error: " + xhr.status);
    } 
  }
};

xhr.open("get", "ejemplo.php", true);
xhr.send(null);
```

Se puede cancelar una request utilizando el método _abort()_:
```javascript
xhr.abort();
```
