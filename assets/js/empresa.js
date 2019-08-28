/*
NAME: Rafael Luis Albano.
DATA: 20/08/2019 á 27/09/2019
DESCRIPTION: Selective process(Front-end Developer) Vectron Lab
*/


//Realizando a requisição get com a Fetch api e criando novos elementos na minha tabela.
fetch('http://35.233.181.190:8005/api/41051278/company_list/')

    .then(response => (response.status === 200) ? response.json(): alert("Error: ",response.status))
    .then(datas =>{

        datas.forEach(data=>{
           newLine(data.code, data.name, data.cnpj);

        });

    })

//Deletar Empresa.
$('tbody').on('click', '#btn_excluir_linha', function(){
    var codigo = $(this).data('codigo');

    //console.log(codigo);

    $(this).parent().parent().hide();

    fetch('http://35.233.181.190:8005/api/41051278/delete_company/',{
            method: 'POST',
            body: JSON.stringify({"code": codigo})
        })
            .then(response => (response.status === 200) ? response.json(): alert("Error: ",response.status))
})

function newLine(codigo,nome,cnpj){
    var tbody = $(".table").find("tbody");
    var linha = $("<tr>").addClass("colunaEmpresa");
    var colunaCod = $("<th>").attr("scope","row").text(codigo);
    var colunaNome = $("<td>").text(nome);
    var colunaCnpj = $("<td>").text(cnpj);
    var colunaButton = $("<td>");
    var button = $("<button id=btn_excluir_linha   data-codigo="+codigo+">").addClass("btn ").addClass("btn-primary").addClass("btn-sm").attr("type","button").text("Excluir");

    linha.append(colunaCod);
    linha.append(colunaNome);
    linha.append(colunaCnpj);
    colunaButton.append(button);
    linha.append(colunaButton);
    tbody.append(linha);



}




