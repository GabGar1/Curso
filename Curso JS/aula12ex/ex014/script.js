function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    console.log(hora)
if(hora >= 0 && hora < 12) {
    // BOM DIA!
    img.src = '/aula12ex/ex014/manha.png.png'
    console.log(hora)
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = '/aula12ex/ex014/tarde.png.png'
} else {
    //BOA NOITE!
    img.src = '/aula12ex/ex014/noite.png.png'
}
}