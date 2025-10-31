export function inicializarFormularioDoacao() {
    const formDoacao = document.getElementById('form-doacao');
    const inputValor = document.getElementById('valor');
    const valorArrecadadoSpan = document.getElementById('valor-arrecadado');
    const barraProgresso = document.getElementById('progresso');
    const feedbackErro = document.getElementById('feedback-erro');

    const metaTotal = 10000;
    let valorAtual = 4250;

    const atualizarProgresso = (novoValor) => {
        valorAtual = novoValor;
        const porcentagem = (valorAtual / metaTotal) * 100;

        valorArrecadadoSpan.textContent = `R$ ${valorAtual.toFixed(2).replace('.', ',')}`;

        barraProgresso.style.width = `${Math.min(porcentagem, 100)}%`;
    };

    if (valorArrecadadoSpan) atualizarProgresso(valorAtual);


    if (inputValor) {
        inputValor.addEventListener('input', () => {
            if (inputValor.classList.contains('input-erro')) {
                inputValor.classList.remove('input-erro');
                feedbackErro.style.display = 'none';
            }
        });
    }

    if (formDoacao) {
        formDoacao.addEventListener('submit', (event) => {
            event.preventDefault();

            const doacao = parseFloat(inputValor.value);

            if (isNaN(doacao) || doacao < 10) {
                inputValor.classList.add('input-erro');
                feedbackErro.textContent = '🚨 O valor da doação deve ser no mínimo R$ 10,00.';
                feedbackErro.style.display = 'block';
                return;
            } else {
                inputValor.classList.remove('input-erro');
                feedbackErro.style.display = 'none';
            }

            const novoValor = valorAtual + doacao;
            atualizarProgresso(novoValor);

            alert(`🥳 Doação de R$ ${doacao.toFixed(2).replace('.', ',')} Processada com Sucesso!`);
            inputValor.value = ''; 
        });
    }
}