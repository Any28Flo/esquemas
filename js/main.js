
var nodoAbuelo=document.getElementById("principal");
var nodoPadre= creaNodo();
var nodoPadre2= creaNodo();
//Les aderimos una clase "padres"
nodoPadre.className="padres";
nodoPadre2.className="padres";
// Le aderimos el hijo
nodoAbuelo.appendChild(nodoPadre2);
nodoAbuelo.appendChild(nodoPadre);
var coordenada_x=30;
var coordenada_y=30;
// Nos traemos el arreglo con todos los elementos que pertenescan a la clase
var clasePadre =Array.from(document.getElementsByClassName("padres"));
 console.log(clasePadre);
clasePadre.forEach(function(elemento){
  elemento.style.position="relative";
   elemento.style.height="200px";
   elemento.style.width="200px";
   elemento.style.background= "#FF6F00";
   elemento.style.top=coordenada_x+"px";
   elemento.style.left=coordenada_y+"px";
   coordenada_x+=30;
});

function creaNodo(){
    return document.createElement("div");
}
