
$('.add-corporation').click(event =>{
    event.preventDefault();

    //var remove = "<button type=\'button\' class=\'btn btn-primary btn-sm\'>Excluir</button>";

    fetch('http://35.233.181.190:8005/api/41051278/company_list/')

        .then(response => (response.status === 200) ? response.json(): alert("Error: ",response.status))
        .then(datas =>{

            datas.forEach(data=>{
               newLine(data.code, data.name, data.cnpj);

            });

            removeLinha();

            //deleteEmpresa();
        })
});


function removeLinha(){
    $(".btn").on("click",event =>{
        event.preventDefault();

        console.log(document.querySelector(".colunaEmpresa"));

    });
}

function newLine(codigo,nome,cnpj){
    var tbody = $(".table").find("tbody");
    var linha = $("<tr>").addClass("colunaEmpresa");
    var colunaCod = $("<th>").attr("scope","row").text(codigo);
    var colunaNome = $("<td>").text(nome);
    var colunaCnpj = $("<td>").text(cnpj);
    var colunaButton = $("<td>");
    var button = $("<button>").addClass("btn ").addClass("btn-primary").addClass("btn-sm").attr("type","button").text("Excluir");

    linha.append(colunaCod);
    linha.append(colunaNome);
    linha.append(colunaCnpj);
    colunaButton.append(button);
    linha.append(colunaButton);
    tbody.append(linha);



}

/*
function deleteEmpresa(){
    $(".btn").click(event =>{

        event.preventDefault();

        fetch('http://35.233.181.190:8005/api/41051278/delete_company/',{
            method: 'POST',
            body: JSON.stringify({"code": 4})
        })
            .then(response => (response.status === 200) ? response.json(): alert("Error: ",response.status))
    });
}
*/


