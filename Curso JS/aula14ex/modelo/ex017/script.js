function tabuada(){
    var escolha = Number(document.getElementById('esc').value);
    var res = document.getElementById('res');
    
    res.innerHTML = '';
    for(var multiplicador = Number(1); multiplicador <=10; multiplicador ++){
        var resultado =  Number(escolha * multiplicador)
        res.innerHTML += `${escolha} x ${multiplicador} = ${resultado}<br>`
        
        
    } 
}