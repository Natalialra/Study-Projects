function buscar (){
    let cep = document.getElementById("cepp").value
    let url = `https://viacep.com.br/ws/${cep}/json/`
    if (cep == "" || cep.length < 8) {
        alert("Digite um CEP válido para pesquisa. O CEP deve conter 8 caracteres")
    } 
    fetch(url)
        .then(response => {
            response.json() 
            .then(informacoes => {
                if (informacoes.cep == undefined) {
                    let divRetorno = document.getElementsByClassName("return")[0]
                    divRetorno.style.visibility = "visible"

                    let retornoErro = document.getElementsByName("infoErro")[0]
                    retornoErro.innerHTML = "Este número de CEP não foi encontrado na base de dados dos correios."
    
                    let retornoErro1 = document.getElementsByName("infoErro1")[0]
                    retornoErro1.innerHTML ="Digite um número de CEP válido e tente novamente"
                } else {
                let retornoRua = document.getElementById('logradouro').value = informacoes.logradouro
                let retornoBairro = document.getElementById('bairro').value = informacoes.bairro
                let retornoCidade = document.getElementById('localidade').value = informacoes.localidade
                let retornoEstado = document.getElementById('uf').value = informacoes.uf
                let divRetorno = document.getElementsByClassName("return")[0]
                divRetorno.style.visibility = "visible"
                let retornoCorreto = document.getElementById("infoRetorno")
                retornoCorreto.innerHTML = "Informações Referentes ao CEP " + cep
                let retornoCorreto1 = document.getElementById("infoRetorno1")
                retornoCorreto1.innerHTML = "Esse CEP pertence à " + retornoRua + ", que fica localizada no bairro " + retornoBairro + ", na cidade de " + retornoCidade + " - " + retornoEstado + "."
            }})
    })
}
function mascaraCep() {
    let cep = document.getElementById("cepp").value
    if (cep == "" || cep.length < 8) {
        alert("Digite um CEP válido para pesquisa. O CEP deve conter 8 caracteres")
        document.getElementById("cepp").value = ""
    } else {
        document.getElementById("cepp").value = cep.substring(0,5)
        +"-"
        +cep.substring(5)
    }
}

