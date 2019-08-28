
fetch('http://35.233.181.190:8005/api/41051278/process_list/')

    .then(response => (response.status === 200) ? response.json(): alert("Error: ",response.status))
    .then(datas =>{

        datas.forEach(data=>{
            newLine(data.code,data.name,data.process_1,data.process_2,data.process_3,data.process_4);

        });



    })


//Criar novas linhas dinâmicamente na Tabela.
function newLine(cod,nome,processo_1,processo_2,processo_3,processo_4){
    var tbody = $(".table").find("tbody");
    var linha = $("<tr>");
    var colunaCod = $("<th>").attr("scope","row").text(cod);
    var colunaNome = $("<td>").text(nome);
    var colunaProc_1 = $("<td>").text(processo_1);
    var colunaProc_2 = $("<td>").text(processo_2);
    var colunaProc_3 = $("<td>").text(processo_3);
    var colunaProc_4 = $("<td>").text(processo_4);


    linha.append(colunaCod);
    linha.append(colunaNome);
    linha.append(colunaProc_1);
    linha.append(colunaProc_2);
    linha.append(colunaProc_3);
    linha.append(colunaProc_4);
    tbody.append(linha);
}
