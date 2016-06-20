#Uso del XHR

Para empezar a utilizar el objeto XHR, primero se tiene que llamar a su metodo _open()_, el cual acepta tres argumentos:

1. El tipo de request a enviar ("get", "post", etc).
2. La URL a la que llamar.
3. Un boolean que indica si la request debe realizarse de modo asincrono.

```javascript
xhr.open("get", "ejemplo.php", true);
```

El codigo anterior abre una request asincrona hacia _ejemplo.php_.

A considerar que:
1. la URL es relativa a la pagina desde la que sea hace la llamada, aunque tambien se puede utilizar una ruta absoluta.
2. La llamada a _open()_ no realizar realmente la request, simplemente prepara la request para ser enviada.
3. Solo se puede acceder URLs que existan en el mismo origen, entiendo como tal el mismo dominio, utilizando el mismo puerto, y con el mismo protocolo. Si la URL no cumple lo anterior, se lanzara un mensaje de seguridad.

Para enviar la request es necesario llamar el metodo _send()_ de la siguiente manera:
```javascript
xhr.open("get", "ejemplo.php", true);
xhr.send(null):
```

El metodo _send()_ acepta un solo argumento, que es la informacion a enviar en el cuerpo de la peticion. Si no se necesita cuerpo para enviar datos se le debe pasar _null_, ya que este argumento es obligatorio en algunos navegadores. Cuando se llama al _send()_ la request viaja hacia al servidor.
