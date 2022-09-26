const vagas = []
function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        //1. nome, (x candidatos) 
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidato.length + " candidatos" + ") \n"
        return textoFinal;
    }, "")
    alert(vagasEmTexto)
}
function novaVaga() {
    const nome = prompt("Informe um nome para a vaga")
    const descricao = prompt("Informe uma descrição para a vaga: ")
    const dataLimite = prompt("Informe a data limite para a vaga (formato dd/mm/aaaa)")

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?" +
        "\nNome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )
    if (confirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidato: [] }
        vagas.push(novaVaga);
        alert("Vaga Criada")
    }
}
function exibirVaga() {
    const indice = prompt("Informe o indice da vaga que deseja exibir: ")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidato.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato;

    }, "")
    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData Limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidato.length +
        "\nCandidatos incritos: " + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a): ")
    const indice = prompt("Informe o indice da vaga para qual o(a) candidato(a) deseja se inscrever: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato na vaga: " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
    if (confirmacao) {
        vaga.candidato.push(candidato)
        alert("Inscrição realizada")
    }
}
function excluirVaga() {
    const indice = prompt("Informe o indice da vaga que deseja excluir ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga: " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluida")
    }
}

function exibirMenu() {
    const opcao = prompt(
        "Cadastro de vagas de emprego" +
        "\n\nEscolha uma das opções:" +
        "\n1. Listar vagas disponiveis" +
        "\n2. Criar nova vaga" +
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever um candidato" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
    )
    return opcao;
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()
        switch (opcao) {
            case "1":
                listarVagas();
                break;
            case "2":
                novaVaga();
                break;
            case "3":
                exibirVaga();
                break;
            case "4":
                inscreverCandidato();
                break;
            case "5":
                excluirVaga();
                break;
            case "6":
                alert("Encerrando o sistema")
            default:
                alert("Opção inválida")
                break;          
        }
    } while (opcao !== "6")
}

executar();