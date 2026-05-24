let conta = 0
let pessoas = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input",receberValorConta)
    
function receberValorConta(evento) {
    conta = Number(evento.target.value)
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadesPessoas)

function receberQuantidadesPessoas(event) {
    const paragrafoErro =  document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box")

    if(event.target.value === "0") {
        paragrafoErro.style.display = "block"
        divErro.setAttribute("id", "erro-div")
    } else {
        paragrafoErro.style.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(event.target.value)
    }
}