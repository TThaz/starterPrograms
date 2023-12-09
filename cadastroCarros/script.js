let modeloCarro;
let marcaCarro;
let corCarro;
let anoCarro;

function start() {

        modeloCarro = prompt("Qual o modelo do carro que deseja cadastrar?")
        marcaCarro = prompt("Qual a marca do carro que deseja cadastrar?")
        corCarro = prompt("Qual a cor do carro que deseja cadastrar?")
        anoCarro = prompt("Qual o ano do carro que deseja cadastrar?")

        alert(`Você cadastrou o carro de modelo: ${modeloCarro}, marca: ${marcaCarro}, cor: ${corCarro}, ano: ${anoCarro}.`)
        console.log(`Você cadastrou o carro de modelo: ${modeloCarro}, marca: ${marcaCarro}, cor: ${corCarro}, ano: ${anoCarro}.`)
        
    }