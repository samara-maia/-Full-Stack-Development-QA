let dia = 5;
let diaNome = '' ;

switch(dia) {
    case 6:
        diaNome = 'Final de semana';
        break;
    case 7:
        diaNome = 'Final de semana';
        break;
    default:
        diaNome = 'Dia da semana'
        break;   
}
document.getElementById("dia").innerHTML = "Hoje é: "+diaNome;