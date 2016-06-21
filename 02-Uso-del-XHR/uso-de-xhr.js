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
