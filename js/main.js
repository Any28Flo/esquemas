
var nodoAbuelo=document.getElementById("principal");
var nodoPadre= creaNodo();
var nodoPadre2= creaNodo();
var nodoHijo = creaNodo();
var nodoHijo1= creaNodo();
var nodoInterno = creaNodo();
var nodoInterno2 = creaNodo();
//Les aderimos una clase "padres"
nodoPadre.className="padres";
nodoPadre2.className="padres";
nodoHijo.className="hijos";
nodoHijo1.className="hijos";
nodoInterno.className="interno";
nodoInterno2.className="interno";
nodoAbuelo.appendChild(nodoPadre2);
nodoAbuelo.appendChild(nodoPadre);
nodoPadre.appendChild(nodoHijo);
nodoPadre2.appendChild(nodoHijo1);
nodoHijo.appendChild(nodoInterno);
nodoHijo1.appendChild(nodoInterno2);
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
var interna_y=25;
var claseHijo=Array.from(document.getElementsByClassName("hijos"));
claseHijo.forEach(function(elemento,indice){
  elemento.style.height="100px";
  elemento.style.width="100px";
  elemento.style.background="green";
  elemento.style.top=interna_x+"px";
  elemento.style.left=interna_x+"px";
  if(indice%2==0){
    elemento.style.position="absolute";

  }else {
    elemento.style.position="relative";
  }
})

var claseInterno= Array.from(document.getElementsByClassName("interno"));
console.log(claseInterno);
claseInterno.forEach(function(elemento,indice){
  elemento.style.height="50px";
  elemento.style.width="50px";
  elemento.style.background="yellow";
   if(indice%2==0){
    elemento.style.position="absolute";
    elemento.style.top=interna_y+"px";
    elemento.style.left=interna_y+"px";
  }else {
    elemento.style.position="absolute";
    elemento.style.top=0+"px";
    elemento.style.left=0+"px";
  }
})
function creaNodo(){
    return document.createElement("div");
}
