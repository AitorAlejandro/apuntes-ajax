# Form Data type

La serializacion de un formulario es algo comun a realizar en las aplicaciones web. La especificacion XMLHttpRequest Level 2 incluye el tipo de dato _FormData_. _FormData_ permite serializar formularios existentes y crear un formato de formulario desde otros datos de forma correcta para su uso via AJAX.

El siguiente codigo crea un objeto _FormData_:
```javascript
var datos = new FormData();
datos.append("nombre", "Aitor");
```

El metodo _append()_ acepto dos argumentos, una clave (el nombre del parametro) y un valor (el valor que tiene el parametro). Se pueden a;adir tantas clave-valor como se quiera.

Tambien es posible que se genere automaticamente un _FormData_ de forma directa.
```javascript
var datos = new FormData(document.getElementById('formuId'));
```

Un objeto _FormData_ puede enviarse directamente en el objeto XHR a traves de su metodo _send()_.

```javascript
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    if ((xhr.status >= 200 || xhr.status < 300) || xhr.status == 304) {
      console.log(xhr.responseText);
    } else {
      console.log("Ha ocurrido en error " + xhr.status);
    }
  }
};

xhr.open("post", "ejemplo.php", true);
var formu = document.getElementById('formId');
xhr.send( new FormData(formu) );
```
