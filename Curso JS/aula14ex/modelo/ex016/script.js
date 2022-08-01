function verificar() {
    var ini = Number(document.getElementById('txti').value);
    var fim = Number(document.getElementById('txtf').value);
    var passo = Number(document.getElementById('txtp').value);   
    var res = document.getElementById('res');

    if (ini == '' || fim == '' || passo == '') {
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: ';
        for(var c = ini ; c <= fim; c += passo) {
                res.innerHTML += c +"... ";
        }
    }

}