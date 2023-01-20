function HandleAgeVerify(){ 
    let input = parseInt(document.querySelector("#n2").value)
    let escrever = document.querySelector("h1")
    

    if (input <= 30){
        escrever.innerHTML = " Seu peso não se encaixa a nenhuma categoria "
    } else if (input <=61){
        escrever.innerHTML = " Parabéns, você estar na categoria peso Pena "
    } else if (input <=74) {
        escrever.innerHTML = "Parabéns,  você estar na categoria  peso Médio"
    } else if (input <=93) {
        escrever.innerHTML = "Parabéns, você estar na categoria  Meio-pesado"
    } else{
        escrever.innerHTML = "parabéns, você estar na categoria Pesado"
    } 
}

