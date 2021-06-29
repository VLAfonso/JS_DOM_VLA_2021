(() => {
    const novaTarefa = document.querySelector('[data-form-button]') //variavel infos botao

    function criarBotaoDelete() { //func criar botao apagar
        const botaoDelete = document.createElement('span') //criar botao span + add texto + add classe
        botaoDelete.innerText = "x"
        botaoDelete.classList = "close"

        botaoDelete.addEventListener('click', deletarTarefa) //verificar botaoDelete clicado, se sim, direciona func deletarTarefa

        return botaoDelete
    }

    function criarBotaoConcluir() { //func criar botao concluir
        const botaoConcluir = document.createElement('input') //criar o botao input + add tipo + add classe
        botaoConcluir.setAttribute('type', 'checkbox')
        botaoConcluir.classList = 'form-check-input'

        botaoConcluir.addEventListener('click', concluirTarefa) //verificar botaoConcluir clicado, se sim, direciona func concluirTarefa

        return botaoConcluir //retorna botao
    }

    function deletarTarefa(evento) { //func apagar tarefa
        const botaoDeleteClicado = evento.target //seleciona tarefa desejada
        const itemDaLista = botaoDeleteClicado.parentElement

        itemDaLista.remove() //apaga tarefa desejada
    }

    function concluirTarefa(evento) { //func concluir tarefa
        const botaoConcluirClicado = evento.target //seleciona tarefa desejada e muda classe
        const itemDaListaConcluido = botaoConcluirClicado.parentElement
        itemDaListaConcluido.classList.toggle('tarefa_concluida')
    }

    function criarTarefa(evento) { //func add tarefa na tela
        evento.preventDefault()

        const inputTarefa = document.querySelector('[data-form-input]') //variaveis infos input, texto tarefa e lista (onde texto será add)
        const valorTarefa = inputTarefa.value
        const listaDeTarefas = document.querySelector('[data-task]')

        novaLabel = document.createElement('label') //criar label + add texto + add classe
        novaLabel.innerText = `- ${valorTarefa}`
        novaLabel.className = "form-check-label"

        novoItem = document.createElement('li') //criar item da tarefa

        novoItem.appendChild(criarBotaoConcluir()) //add botao concluir, label e botao delete no item
        novoItem.appendChild(novaLabel)
        novoItem.appendChild(criarBotaoDelete())

        listaDeTarefas.appendChild(novoItem) //add item na lista

        inputTarefa.value = "" //apagar escritos input

    }

    novaTarefa.addEventListener('click', criarTarefa) //verificar novaTarefa clicado, se sim, direciona func criarTarefa
})()