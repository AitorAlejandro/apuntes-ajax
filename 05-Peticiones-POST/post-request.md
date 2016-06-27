# POST Request

Típicamente este tipo de request se utiliza para enviar datos al servidor que deberían ser guardados. Se espera que en cada request POST se envien datos en el cuerpo de la request. El cuerpo puede contener una alta cantidad de datos, y estos datos pueden estar en cualquier formato.

Para iniciar una petición POST:
```javascript
xhr.open("post", "ejemplo.php", true);
```

La segunda parte es pasarle al servidor los datos. Como XHR fue diseñado originalmente para trabajar con XML, se puede pasar directamente un documento XML. También se puede pasar cualquier String.
```javascript
xhr.send(data);
```

Por defecto, una request POST no es igual que un submit de un formulario. El servidor necesitará leer los datos _en crudo_ para recorgerlos. En PHP no llegarían en *$_POST* si no en *$HTTP_RAW_POST_DATA* Se puede, sin embargo, simular el submit de un formulario estableciendo la cabecera _Content-Type_ con el valor _application/x-www-form-urlencoded_, y pasándole un String con el formato correcto, es decir, como una _query string_. Si el formulario ya se encuentra en la página debe ser serializado antes de enviarse vía XHR.

Para serializar el formulario podemos utilizar la función _serializar()_.
```javascript
function serializar(formulario) {
  
  var parts = [],
  field = null,
  i,
  len,
  j,
  optLen,
  option,
  optValue;
  
  for(i=0; len = formulario.elements.length; i < len; i++) {
    field = form.elements[i];
    
    switch(field.type) {
      case "select-one":
      case "select-multiple":
        if(field.name.length) {
          for(j=0; optLen = field.options.length; j < optLen; j++) {
            option = field.options[j];
            if(option.selected) {
              optValue = "";
              if(option.hasAttribute) {
                optValue = (option.hasAttribute("value") ? option.value : option.text);
              } else {
                optValue = (option.attributes["value"].specified ? option.value : option.text);
              }
              parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(optValue));
            }
          }
        }
        break;
      
      case undefined: //fieldset
      case "file": //input file
      case "submit": //submit button
      case "reset": //reset button
      case "button": //custom buttom
        break;
        
      case "radio":
      case "checkbox":
        if(!field.checked) {
          break;
        }
      default:
        //no incluir formularios sin atributos name para su campos
        if(field.name.length) {
          parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(optValue));
        }
    }
  }
  return parts.join("&");
}
```

Y con esta otra función enviaríamos los datos por AJAX simulando el envío de un POST de un formulario.
```javascript
function enviarDatos() {
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
  
  xhr.open("post", "ejemplo.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  var formu = document.getElementById("formId");
  xhr.send(serializar(formu));
}
```
