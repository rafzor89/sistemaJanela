
function submitCep(){
    //alert('olá vc esa submetendo o cep');
    //console.log('olá vc esa submetendo o cep');
    const cep = $("input#cep").val();
    $.ajax({
        type:"GET",
        url:"https://viacep.com.br/ws/"+cep+"/json/",
        //url:"https://localhost:8080/api/transid/vacina"
        dataType:"json",
        success:function(data){
            //console.log(data);
            const ele = '<div>' +
                        '<span>logradouro:' + data.logradouro + '</span>' +
                        '</div>'
            $(ele).appendTo("#janela-conteudo");
        },
        erro:function(){
            alert("Deu algo de errado");
        },
        beforeSend:function(){
            
        }
        
    })
}