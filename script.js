function init() {
    alert("mundaca de filtro")
}

function exibeContatos() {
    tableContatos = document.getElementById("table-contatos");

    // Remove todas as linhas do corpo da tabela
    tableContatos.innerHTML = "";

    readContato(dados => {

        // Popula a tabela com os registros do banco de dados
        for (i = 0; i < dados.length; i++) {
            let contato = dados[i];
            alert('contato');
            tableContatos.innerHTML += `<tr><td scope="row">${contato.id}</td>
                                            <td>${contato.autor}</td>
                                            <td>${contato.titulo}</td>
                                            <td>${contato.edicao}</td>
                                            <td>${contato.ano}</td>
                                            <td>${contato.genero}</td>
                                            <td>${contato.paginas}</td>
                                            <td>${contato.local}</td>
                                            <td>${contato.emp}</td>
                                        </tr>`;
        }
    })
}


function tabela() {

    fetch("https://viniciusxr.github.io/TIAW/db.json")
        .then(res => res.json())
        .then(data => {

            let str = '';

            for (let i = 0; i < data.length; i++) {
                let posts = data[i];
                alert("posts")
                str += `<div><tr><p><td>${posts.grupo}</td><td><p>${posts.nome_alimento}</p></td></tr></div>`
            }
            document.getElementById('tablebody').innerHTML = str;
        })
}

