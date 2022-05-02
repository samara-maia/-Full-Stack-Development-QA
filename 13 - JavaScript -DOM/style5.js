function alterar(){
    document.getElementById("titulo").innerHTML = "Trocou o titulo!";
    document.getElementById("campo").value = "Trocou o campo!";
}

alterar("titulo de exemplo")

function somar (x, y){
    
    let total = x + y;
 return total;
   // document.getElementById("campo").value = total;
}
var resultado = somar(10, 15);

console.log(resultado);