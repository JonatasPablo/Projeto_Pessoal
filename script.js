 // Função para formatar o valor para moeda em Reais (R$)
 function formatCurrency(input) {
    var value = input.replace(/\D/g, '');
    value = (value / 100).toFixed(2);
    value = 'R$ ' + value.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return value;
}

// Obtém o elemento do input
var salario = document.getElementById('salario');
var decimoterceiro = document.getElementById('decimoterceiro');
var feriasproporcional = document.getElementById('feriasproporcional');
var umterco = document.getElementById('umterco');
var fgts = document.getElementById('fgts');
var contabilidade = document.getElementById('contabilidade');
var total = document.getElementById('total');
var calcularButton = document.getElementById('calcularButton');

// Adiciona um evento para chamar a função formatCurrency quando o usuário digitar no input
salario.addEventListener('keyup', function() {
    this.value = formatCurrency(this.value);
});
decimoterceiro.addEventListener('keyup', function() {
    this.value = formatCurrency(this.value);
});
feriasproporcional.addEventListener('keyup', function() {
    this.value = formatCurrency(this.value);
});
umterco.addEventListener('keyup', function() {
    this.value = formatCurrency(this.value);
});
fgts.addEventListener('keyup', function() {
    this.value = formatCurrency(this.value);
});
contabilidade.addEventListener('keyup', function() {
    this.value = formatCurrency(this.value);
});

// Função para calcular os valores automaticamente
function calcularValores() {
    var salarioValue = parseFloat(salario.value.replace(/\D/g, '').replace(',', '.')) / 100;
    var decimoterceiroValue = (slalarioVaue / 12).toFixed(2);
    var feriasproporcionalValue = (salarioValue / 12).toFixed(2);
    var umtercoValue = (feriasproporcionalValue / 3).toFixed(2);
    var fgtsValue = (salarioValue * 0.08).toFixed(2);
    var contabilidadeValue = parseFloat(contabilidade.value.replace(/\D/g, '').replace(',', '.')) / 100;
    var totalValue = (salarioValue + parseFloat(decimoterceiroValue) + parseFloat(feriasproporcionalValue) + parseFloat(umtercoValue) + parseFloat(fgtsValue) + contabilidadeValue).toFixed(2);

    decimoterceiro.value = formatCurrency(decimoterceiroValue);
    feriasproporcional.value = formatCurrency(feriasproporcionalValue);
    umterco.value = formatCurrency(umtercoValue);
    fgts.value = formatCurrency(fgtsValue);
    total.value = formatCurrency(totalValue);

    // Desabilitar os campos após o cálculo
    decimoterceiro.disabled = true;
    feriasproporcional.disabled = true;
    umterco.disabled = true;
    fgts.disabled = true;
    total.disabled = true;
}

calcularButton.addEventListener('click', calcularValores);

// Adiciona um evento para acionar a função calcularValores() quando a tecla "Enter" for pressionada
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calcularValores();
    }
});