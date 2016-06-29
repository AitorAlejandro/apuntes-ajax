# Form Data type

La serialización de un formulario es algo común a realizar en las aplicaciones web. La especificación XMLHttpRequest Level 2 incluye el tipo de dato _FormData_. _FormData_ permite serializar formularios existentes y simular un formato de formulario desde otros datos de para su uso vía AJAX.

El siguiente código crea un objeto _FormData_:
```javascript
var datos = new FormData();
datos.append("nombre", "Aitor");
```

El método _append()_ acepta dos argumentos, una clave (el nombre del parametro) y un valor (el valor que tiene el parametro). Se pueden añadir tantos pares clave-valor como se quiera.

También es posible que se genere automáticamente un _FormData_ de forma directa.
```javascript
var datos = new FormData(document.getElementById('formuId'));
```

Un objeto _FormData_ puede enviarse directamente en el objeto XHR a traves de su método _send()_.

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

Una de las ventajas de usar _FormData_ es que no hay que establecer cabeceras. El objeto XHR configura las cabeceras de forma automática. 
