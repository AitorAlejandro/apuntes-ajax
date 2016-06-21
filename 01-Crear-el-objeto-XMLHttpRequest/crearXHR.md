#Creando el objeto XMLHttpRequest

Internet Explorer 5 fue el primer navegador en introducir el objeto **XHR**. Lo hizo a través de utilizar un objeto _ActiveX_ incluido como parte de la librería _MSXML_. Por ello hay tres versiones del objeto **XHR** segun la librería utilizada por el sistema operativo: _MSXML2.XMLHttp_, _MSXML2.XMLHttp.3.0_, y _MSXML2.XMLHttp.6.0_. Esto requería varios intentos de generar el objeto XMLHttpRequest mediante el uso de _try_ y _catch_.

Internet Explorer 7+, Firefox, Opera, Chrome y Safari soportaron el objeto XHR nativo, el cual puede generarse utilizando el constructor propio de javascript para ello:

```javascript
var xhr = new XMLHttpRequest();
```

Si solo necesitas dar soporte a partir de Intenet Explorer 7 (cosa que espero sea así), puedes ir directamente a generar el objeto XMLHttpRequest de la manera que se indica arriba.
