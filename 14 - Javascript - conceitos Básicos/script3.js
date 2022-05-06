// array =>  listagem de numerada aparti de 0
// objeto => listagem nomeada

let carros = [
    'palio',
    'Uno',
    'Corolla',
    'Ferrari'
]; //array

let carro = {
    nome:'fiat',
    modelo:'Uno',
    peso:'800kg',
    ligado:false,
    ligar:function(){
        this.ligado = true;
        console.log("vrum");
    },
    acelerar:function(){
        if(this.ligado == true){
            console.log("riiiii");
        }else{
            console.log(this.nome+" "+this.modelo+"não esta ligado!")
        }
    }
}; // objeto

console.log("modelo"+carro.modelo);

//document.getElementById("titulo").style.display = "block";