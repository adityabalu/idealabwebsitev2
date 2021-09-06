var http = false;

if(navigator.appName == "Microsoft Internet Explorer") {
  http = new ActiveXObject("Microsoft.XMLHTTP");
} else {
  http = new XMLHttpRequest();
}

http.open("GET", "navigation.txt");
http.onreadystatechange=function() {
  if(http.readyState == 4) {
    var navbar = document.getElementById('navbar');
        navbar.innerHtml = http.responseText;
  }
}
http.send(null);