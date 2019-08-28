
//Expressão regular criada para verificar se realmente o campo CNPJ respeita a formatação desejada. 
const exp = new RegExp('([0-9]{2}\.[0-9]{3}\.[0-9]{3}/[0-9]{4}-[0-9]{2})', 'g');

$(".botaoEnviar").on('click',event =>{
    event.preventDefault();
    var inputForm = {
        code: $("#codigo-empresa").val(),
        name: $("#nome-empresa").val(),
        cnpj: $("#cnpj-empresa").val(),
        fantasy_name: $("#nome-fantasia").val(),
        owner_1: $("#socio-empresa").val(),
        owner_2: $("#segundo-socio").val(),
        website: $("#site-empresa").val(),
        phone: $("#telefone-empresa").val(),
        address: $("#endereco-empresa").val()
    }
    
    var target = $("#cnpj-empresa").val();
    
    

    if(exp.test(target)){
        fetch('http://35.233.181.190:8005/api/41051278/add_company/',{
            method: "POST",
            headers:{
                "Content-type":"aplication/json"
            },
            body: JSON.stringify(inputForm)
    
    
        })
    
        .then(response =>{
            if(response.status === 200){
                $(".spinner").hide();
                $(".sucesso").toggle();
                return true;
            }else{
                $(".spinner").hide();
                $(".falha").toggle();
                return false;
            }
        })
        //console.log(JSON.stringify(inputForm));
        resetInput(); 
    }else{
        alert("CNPJ Inválido...");
        resetInput(); 
        
        return false;
    }

    
});

function resetInput(){
        $("#codigo-empresa").val("");
        $("#nome-empresa").val("");
        $("#cnpj-empresa").val("");
        $("#nome-fantasia").val("");
        $("#socio-empresa").val("");
        $("#segundo-socio").val("");
        $("#site-empresa").val("");
        $("#telefone-empresa").val("");
        $("#endereco-empresa").val("");
   
}

