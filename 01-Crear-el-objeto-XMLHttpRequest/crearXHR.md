#Creando el objeto XMLHttpRequest

Internet Explorer 5 fue el primer navegador en introducir el objeto **XHR**. Lo hizo a traves de utilizar un objeto _ActiveX_ incluido como parte de la libreria _MSXML_. Por ello hay tres versiones del objeto **XHR** segun la libreria utilizada por el sistema operativo: _MSXML2.XMLHttp_, _MSXML2.XMLHttp.3.0_, y _MSXML2.XMLHttp.6.0_. Esto requeria varios intentos de generar el objeto XMLHttpRequest.

Internet Explorer 7+, Firefox, Opera, Chrome y Safari soportaron el objeto XHR nativo, el cual puede generarse utilizando el constructor nativo de javascript para ello:

```javascript
var xhr = new XMLHttpRequest();
```

Si solo necesitas dar soporte a partir de Intenet Explorer 7 (cosa que espero sea asi), puedes ir directamente a generar el objeto XMLHttpRequest de la manera que se indica arriba. Antiguamente era necesario utilizar una serie de _try_ y de _catch_ para finalmente generar el objeto. Esos tiempos ya han pasado.
