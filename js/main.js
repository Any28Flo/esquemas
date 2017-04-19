
var nodoAbuelo=document.getElementById("principal");
var nodoPadre= creaNodo();
var nodoPadre2= creaNodo();
var nodoHijo = creaNodo();
var nodoHijo1= creaNodo();
//Les aderimos una clase "padres"
nodoPadre.className="padres";
nodoPadre2.className="padres";
nodoHijo.className="hijos";
nodoHijo1.className="hijos";
nodoAbuelo.appendChild(nodoPadre2);
nodoAbuelo.appendChild(nodoPadre);
nodoPadre.appendChild(nodoHijo);
nodoPadre2.appendChild(nodoHijo1);
var coordenada_x=30;
var coordenada_y=30;
// Nos traemos el arreglo con todos los elementos que pertenescan a la clase
var clasePadre =Array.from(document.getElementsByClassName("padres"));
clasePadre.forEach(function(elemento){
   elemento.style.position="relative";
   elemento.style.height="200px";
   elemento.style.width="200px";
   elemento.style.background= "#FF6F00";
   elemento.style.top=coordenada_x+"px";
   elemento.style.left=coordenada_y+"px";
   coordenada_x+=30;
});
//Traemos y editamos las caracteristicas de los elementos de la clase hijos
var interna_x=50;
var interna_y=50;
var claseHijo=Array.from(document.getElementsByClassName("hijos"));
claseHijo.forEach(function(elemento){
  elemento.style.position="absolute";
  elemento.style.height="100px";
  elemento.style.width="100px";
  elemento.style.background="green";
  elemento.style.top=interna_x+"px";
  elemento.style.left=interna_x+"px";
})

function creaNodo(){
    return document.createElement("div");
}
