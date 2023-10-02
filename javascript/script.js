function ex01() {
    var op = prompt("Menu de opções:\n1. Somar dois números.\n2. Raiz quadrada de um número.\n Digite a opção desejada:");
    op = parseInt(op)
    switch (op) {
        case 1:
            var num1 = prompt("Informe o valor do primeiro numero: ");
            var num2 = prompt("Informe o valor do segundo numero: ");
            num1 = parseFloat(num1)
            num2 = parseFloat(num2)
            var soma = num1 + num2
            alert(`Soma entre ${num1} e ${num2} é ${soma}.`)
            break;
        case 2:
            var num = prompt("Informe um numero: ")
            var raiz = Math.sqrt(num)
            alert(`Raiz quadrade de ${num} é ${raiz}.`)
            break;
    }
}
function ex02() {
    var traLab = prompt("Informe a nota do trabalho de laborratório do aluno: ")
    var avaSeme = prompt("Informe a nota da avaliação semestral do aluno: ")
    var exaFin = prompt("Informe a nota do exame final do aluno: ")
    var pesLab = prompt("Informe o peso da nota do trabalho de laboratório: ")
    var pesoSem = prompt("Informe o peso da nota da avaliação semestral: ")
    var pesoFin = prompt("Informe o peso da nota do exame final: ")
    var mediaNe = prompt("Informe o valor da media para aprovação: ")
    traLab = parseFloat(traLab)
    avaSeme = parseFloat(avaSeme)
    exaFin = parseFloat(exaFin)
    pesLab = parseFloat(pesLab)
    pesoSem = parseFloat(pesoSem)
    pesoFin = parseFloat(pesoFin)
    mediaNe = parseFloat(mediaNe)
    var mediaPond = (traLab * pesLab) + (avaSeme * pesoSem) + (exaFin * pesoFin)
    if (mediaPond >= mediaNe) {
        alert(`Media do aluno: ${mediaPond}\nSituação: Aprovado`)
    } else if (mediaPond >= 4) {
        alert(`Media do aluno: ${mediaPond}\nSituação: Exame especial`)
    } else {
        alert(`Media do aluno: ${mediaPond}\nSituação: Reprovado`)
    }
}
function ex03() {
    var idNada = prompt("Informe a idade do nadador: ")
    idNada = parseInt(idNada)
    while (idNada <= 5) {
        idNada = prompt("Opção Inválida.\nDigite novamente: ")
    }
    if (idNada <= 7) {
        alert("Categoria: Infantil")
    } else if (idNada <= 10) {
        alert("Categoria: Juvenil")
    } else if (idNada <= 15) {
        alert("Categoria: Adolecente")
    } else if (idNada <= 30) {
        alert("Categoria: Adulto")
    } else {
        alert("Categoria: Sênior")
    }
}
function ex04() {
    var val = prompt("Informe um valor: ")
    val = parseFloat(val)
    var hx = Math.pow(val, 2) - 16
    var fx
    var gx
    if (hx >= 0) {
        fx = hx
    } else {
        fx = 1
    }
    if (val > 5) {
        gx = Math.pow(val, 2) + 16
    } else {
        gx = (-val) / 2
    }
    alert(`Valor de h(x)= ${hx}\nValor de f(x)= ${fx}\nValor de g(x)= ${gx}`)
}
function ex05() {     /*DUVIDA NESSA AQ */
    var numero = []
    var cont = 1;
    var par = 0
    var impar = 0
    var conta
    var digitado
    while (digitado != -1) {
        digitado = prompt("Informe um numero: ")
        if (digitado != -1) {
            numero[cont] = digitado
            cont++
        }
    }
    for (let i = 0; i < cont-1; i++) {
        conta = numero[i] % 2
        if(conta==0){
            par++
        }else{
            impar++
        }
    }
    alert(`Total de numeros digitados: ${cont - 1}\nNúmeros pares: ${par}\nNúmeros impares: ${impar}`)

}
function ex06() {
   
}