let lista = [
    {id:1, nome:'Samara', sobrenome:'Lacerda'},
    {id:2, nome:'Paulo', sobrenome:'xyz'},
    {id:3, nome:'Fulano', sobrenome:'dasilva'}
];

let pessoa = lista.find(function(item){
    return(item.sobrenome == 'xyz') ? true : false;
})

let res = lista;
//let res = pessoa;

console.log(res);