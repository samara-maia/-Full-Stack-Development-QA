let pessoa = {
  nome: 'Bonieky',
  idade: 90,
  social: {
    facabook: 'b7web',
    instagram: {
      URL: 'bonieky',
      seguidores: 1000
    }
  }
}

function pegarNomeCompleto({
  nome,
  sobrenome = 'Silva',
  social: {
    instagram: { URL: instagram }
  }
}) {
  ;` ${nome} ${sobrenome} (siga em ${instagram})`
}

console.log(pegarNomeCompleto(pessoa))
