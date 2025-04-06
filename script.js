const tarefa = document.querySelector("#tarefa");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");

// Função para adicionar tarefa
function adicionarTarefa() {
    // Verifica se o campo está vazio (removendo espaços)
    if (tarefa.value.trim() === "") {
        alert("Digite uma tarefa válida!");
        return; // Sai da função se for inválido
    }

    // Cria o HTML para o novo item da lista
    const novoItemHTML = `
        <li>
            <i class="fas fa-check-circle check"></i>
            <span>${tarefa.value}</span>
            <i class="fa-solid fa-trash-can close"></i>
        </li>`;

    // Adiciona o novo item ao final da lista
    lista.insertAdjacentHTML('beforeend', novoItemHTML);

    // Limpa o campo de input
    tarefa.value = "";

    // Coloca o foco de volta no input
    tarefa.focus();
}

// Event listeners para ADICIONAR tarefa
btn.addEventListener("click", adicionarTarefa);
tarefa.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});

// --- Listener ÚNICO para Ações na Lista (Deletar e Marcar/Desmarcar) ---
lista.addEventListener("click", function(event) {
    const clickedElement = event.target; // O elemento exato que foi clicado

    // Encontra o elemento <li> pai mais próximo do elemento clicado
    const listItem = clickedElement.closest('li');

    // Se o clique não foi dentro de um <li>, não faz nada
    if (!listItem) {
        return;
    }

    // Ação 1: Se o clique foi no ÍCONE DE LIXEIRA (classe 'close')
    if (clickedElement.classList.contains('close')) {
        listItem.remove(); // Remove o <li> inteiro
    }
    // Ação 2: Se o clique foi no ÍCONE DE CHECK (classe 'check')
    else if (clickedElement.classList.contains('check')) {
        // Alterna a classe 'completed' no <li>
        // Se a classe existe, remove; se não existe, adiciona.
        listItem.classList.toggle('completed');

        // A mudança visual (cor do ícone, texto riscado)
        // será controlada pelo CSS através da classe '.completed'
    }
});