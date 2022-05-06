// manipular datas e horas
let d = new Date()

//d.setFullYear(2022)
d.setDate(d.getDate() + 5)

d.setHours(d.getHours() + 24)

let novoValor = d
console.log(novoValor)
