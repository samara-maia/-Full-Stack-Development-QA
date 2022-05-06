//FOR LOOP
//FOR LOOP ARRAY

let texto = '';

for (let i = 0; i <= 10; i++){
    texto = texto + i + '<br/>';
}

document.getElementById("demo").innerHTML = texto;

//FOR LOOP ARRAY

let carros = ['Ferrari', 'Fusca', 'Palio', 'Caroll']

let html = '<ul>';

for(let i in carros) {
    html += '<li>'+carros[i] +'</li>';
}

html += '</ul>';
 document.getElementById('demo').innerHTML = html;