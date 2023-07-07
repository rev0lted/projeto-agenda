const form = document.getElementById ('form-agenda');
const nome = [];
const numero = [];

let linhas = '';

form.addEventListener ('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    AdicionaContato();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (nome.includes(inputNomeContato.value)) {
        alert (`O contato ${inputNomeContato.value} já existe`);
    } else {
        nome.push(inputNomeContato.value);
        numero.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function AdicionaContato () {
    document.getElementById('nome-adicionado').innerHTML;
    document.getElementById('numero-adicionado').innerHTML;
}
