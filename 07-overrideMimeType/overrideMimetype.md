# El metodo overrideMimeType()

_overrideMimeType()_ ofrece una manera de sobreescribir el tipo MIME de una respuesta XHR. Ya que el tipo MIME de una response determina la manera en que va a ser tratada, viene muy bien poder sobreescribir el tipo devuelto.

Por ejemplo, en un caso en el que el servidor responde con un MIME de _text/plain_ pero que realmente contiene XML. Utilizando _overrideMimeType("text/xml")_ haremos que la respuesta llegue en la propiedad _responseXML_ y no en _responseText_.

```javascript
var xhr = new XMLHttpRequest();
xhr.open("get", "ejemplo.php", true);
xhr.overrideMimeType("text/xml");
xhr.send(null);
```
