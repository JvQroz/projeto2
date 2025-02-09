const res = document.querySelector('div#resImc');
const error = document.querySelector('div#error');
const msg = document.querySelector('div#resMsg');
const resultado = document.getElementById('resSexo');
const masculino = document.getElementById('masculino');
const feminino = document.getElementById('feminino');

function calcImc() {
    let pesoInput = document.getElementById('peso').value;
    let alturaInput = document.getElementById('altura').value;
    let idadeInput = document.getElementById('idade').value;

    let peso = parseFloat(pesoInput);
    let altura = parseFloat(alturaInput);
    let idade = parseInt(idadeInput);

    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura) || isNaN(idade)) {
        error.innerHTML = `<p>Preencha todos os campos!</p>`;
        msg.innerHTML = "";
        return;
    } else {
        error.innerHTML = "";
    }

    let imc = peso / (altura * altura); 
    let imcFormatado = imc.toFixed(2);

    res.innerHTML = `<p>Seu IMC é <strong>${imcFormatado}</strong></p>`;

    let faixaEtaria = '';
    if (idade < 18) {
        faixaEtaria = 'Menor de 18 anos';
    } else if (idade >= 60) {
        faixaEtaria = 'Maior de 60 anos';
    }

    if (imc < 18.5) {
        msg.innerHTML = `<p>Está abaixo do peso normal. ${faixaEtaria ? faixaEtaria : ''}</p>`;
    } else if (imc < 24.9) {
        msg.innerHTML = `<p>Classificação: Eutrófico (Peso Normal). ${faixaEtaria ? faixaEtaria : ''}</p>`;
    } else if (imc < 29.9) {
        msg.innerHTML = `<p>Classificação: Sobrepeso. ${faixaEtaria ? faixaEtaria : ''}</p>`;
    } else if (imc < 34.9) {
        msg.innerHTML = `<p>Classificação: Obesidade Grau I. ${faixaEtaria ? faixaEtaria : ''}</p>`;
    } else if (imc < 39.9) {
        msg.innerHTML = `<p>Classificação: Obesidade Grau II. ${faixaEtaria ? faixaEtaria : ''}</p>`;
    } else {
        msg.innerHTML = `<p>Classificação: Obesidade Grau III (Mórbida). ${faixaEtaria ? faixaEtaria : ''}</p>`;
    }

    if (masculino.classList.contains('ativo')) {
        resultado.innerHTML = `<p>Sexo: Masculino</p>`;
    } else if (feminino.classList.contains('ativo')) {
        resultado.innerHTML = `<p>Sexo: Feminino</p>`;
    } else {
        error.innerHTML = `<p>Preencha todos os campos!</p>`;
        res.innerHTML = "";
        msg.innerHTML = "";
        resultado.innerHTML = "";
        return;
    }z
}

masculino.addEventListener('click', function() {
    masculino.classList.toggle('ativo');
    feminino.classList.remove('ativo'); 
    mostrarResultado(); 
});

feminino.addEventListener('click', function() {
    feminino.classList.toggle('ativo');
    masculino.classList.remove('ativo');
    mostrarResultado(); 
});

document.getElementById("idade").addEventListener("input", function () {
    if (this.value.length > 3) {
        this.value = this.value.substring(0, 3); 
    }
});

document.getElementById("altura").addEventListener("input", function () {
    if (this.value.length > 4) {
        this.value = this.value.substring(0, 4); 
    }
});

document.getElementById("peso").addEventListener("input", function () {
    if (this.value.length > 6) {
        this.value = this.value.substring(0, 6); 
    }
});

document.getElementById("altura").addEventListener("input", function () {
    let valor = this.value.replace(/\D/g, ""); 
    if (valor.length >= 3) {
        this.value = (valor.slice(0, -2) + "." + valor.slice(-2)).replace(",", "."); 
    }
});

document.getElementById("peso").addEventListener("input", function () {
    let valor = this.value.replace(/\D/g, ""); 
    if (valor.length >= 3) {
        this.value = (valor.slice(0, -2) + "." + valor.slice(-2)).replace(",", "."); 
    }
});

document.querySelectorAll("input[type=number]").forEach(function(input) {
    input.addEventListener("keydown", function(event) {
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            event.preventDefault(); 
        }
        if (event.key === "e" || event.key === "E") {
            event.preventDefault();
        }
    });
});
