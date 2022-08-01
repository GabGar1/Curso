var agora = new Date() // serve pra oegar o horario ná maquina q está rodando o script
var hora = agora.getHours() // complementa o new date
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}