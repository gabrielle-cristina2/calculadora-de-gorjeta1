let conta = 0
let pessoas = 0
let porcentagem = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", receberValorConta)

function receberValorConta(evento) {
    conta = Number(evento.target.value)
    calcular()
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadesPessoas)

function receberQuantidadesPessoas(event) {
        const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box")
       if (event.target.value === "") {
        paragrafoErro.style.display = "block"
        divErro.setAttribute("id", "erro-div")
        pessoas = 0
    } else {
        if (event.target.value === "0") {
            paragrafoErro.style.display = "block"
            divErro.setAttribute("id", "erro-div")
            pessoas = 0
        } else {
            paragrafoErro.style.display = "none"
            divErro.setAttribute("id", "")
            pessoas = Number(event.target.value)
        }
    }

    calcular()
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='button']")
botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPorcentagem)
})

function receberPorcentagem(evento) {
        botoesGorjeta.forEach(botao => botao.classList.remove("botao-ativo"))

    evento.target.classList.add("botao-ativo")
    document.querySelector("#Outra").value = ""
        porcentagem = parseFloat(evento.target.value) / 100
    calcular()
}

const gorjetaInput = document.querySelector("#Outra")
gorjetaInput.addEventListener("input", receberPorcentagemPersonalizada)

function receberPorcentagemPersonalizada(evento) {
    botoesGorjeta.forEach(botao => botao.classList.remove("botao-ativo"))

    const valor = parseFloat(evento.target.value)
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box")

    if (evento.target.value === "") {
        porcentagem = 0
                paragrafoErro.style.display = "block"
        divErro.setAttribute("id", "erro-div")
    } else {
        if (valor === 0 || isNaN(valor)) {
            porcentagem = 0
            paragrafoErro.style.display = "block"
            divErro.setAttribute("id", "erro-div")
        } else {
            porcentagem = valor / 100
            paragrafoErro.style.display = "none"
            divErro.setAttribute("id", "")
        }
    }

    calcular()
}

    
function calcular() {
    const valorGorjeta = document.querySelector("#valor-gorjeta")
    const valorTotal = document.querySelector("#valor-total")
        if (conta > 0 && pessoas > 0 && porcentagem > 0) {
        const gorjetaPorPessoa = (conta * porcentagem) / pessoas
        const totalPorPessoa = (conta + (conta * porcentagem)) / pessoas

        valorGorjeta.innerText = `R$${gorjetaPorPessoa.toFixed(2)}`
        valorTotal.innerText = `R$${totalPorPessoa.toFixed(2)}`
    } else {
        valorGorjeta.innerText = `R$0.00`
        valorTotal.innerText = `R$0.00`
    }
}
const botaoLimpar = document.querySelector(".resultados button")
botaoLimpar.addEventListener("click", limpar)

function limpar() {
    conta = 0
    pessoas = 0
    porcentagem = 0

    contaInput.value = ""
    pessoasInput.value = ""
    gorjetaInput.value = ""

    document.querySelector("#valor-gorjeta").innerText = "R$0.00"
    document.querySelector("#valor-total").innerText = "R$0.00"

    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")
    })

    document.querySelector(".pessoas #erro").style.display = "none"
    document.querySelector(".pessoas .input-box").setAttribute("id", "")
}

