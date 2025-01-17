function calcularDataFinal() {
    // Captura a data inicial e a quantidade de dias
    const dataInicial = document.getElementById('dataInicial').value;
    const dias = parseInt(document.getElementById('dias').value);

    // Verifica se a data inicial e os dias foram preenchidos
    if (!dataInicial || isNaN(dias)) {
        alert("Por favor, preencha a data inicial e a quantidade de dias.");
        return;
    }

    // Converte a data inicial para um objeto Date
    const data = new Date(dataInicial);

    // Adiciona a quantidade de dias à data inicial
    data.setDate(data.getDate() + dias);

    // Formata a data final no formato dd/mm/aaaa
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const ano = data.getFullYear();

    const dataFinalFormatada = `${dia}/${mes}/${ano}`;

    // Exibe a data final no campo de resultado
    document.getElementById('dataFinal').textContent = dataFinalFormatada;

    // Calcula e exibe os detalhes
    const diasTotais = dias;
    const diaSemana = data.toLocaleDateString('pt-BR', { weekday: 'long' });
    const semanas = Math.floor(dias / 7);
    const meses = Math.floor(dias / 30);
    const anos = Math.floor(dias / 365);

    document.getElementById('quantidadeDias').textContent = diasTotais;
    document.getElementById('diaSemana').textContent = diaSemana;
    document.getElementById('quantidadeSemanas').textContent = semanas;
    document.getElementById('quantidadeMeses').textContent = meses;
    document.getElementById('quantidadeAnos').textContent = anos;

    // Atualiza o link para compartilhar
    const link = `https://www.exemplo.com/contador-de-dias/resultado?data-inicio=${dataInicial}&data-final=${ano}-${mes}-${dia}`;
    document.getElementById('linkCompartilhar').textContent = link;
}

function compartilharWhatsApp() {
    const dataFinal = document.getElementById('dataFinal').textContent;
    const link = document.getElementById('linkCompartilhar').textContent;
    const mensagem = `Confira o resultado do contador de dias: Data Final: ${dataFinal}. Acesse o link para mais detalhes: ${link}`;
    const urlWhatsApp = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsApp, '_blank');
}

function copiarLink() {
    const link = document.getElementById('linkCompartilhar').textContent;
    navigator.clipboard.writeText(link).then(() => {
        alert("Link copiado para a área de transferência!");
    });
}

function novoCalculo() {
    document.getElementById('contadorForm').reset();
    document.getElementById('dataFinal').textContent = '';
    document.getElementById('quantidadeDias').textContent = '';
    document.getElementById('diaSemana').textContent = '';
    document.getElementById('quantidadeSemanas').textContent = '';
    document.getElementById('quantidadeMeses').textContent = '';
    document.getElementById('quantidadeAnos').textContent = '';
}
