
function getEstado(){    
    $.ajax({
        type:"GET",
        url:"https://servicodados.ibge.gov.br/api/v1/localidades/estados",        
        dataType:"json",
        success:function(data){            
            let option = '<option value="">Selecione um estado</option>'
            $.each(data, function(i,e){
                option += `<option value="${e.sigla}" id="${e.id}">${e.nome}</option>`
            });
            $(option).appendTo("#estado");
        },
        erro:function(){
            
        },
        beforeSend:function(){
            
        }
        
    })
}
function getCidade(uf){    
    $.ajax({
        type:"GET",
        url:"https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+uf+"/municipios",        
        dataType:"json",
        success:function(data){            
            getNewElementCidade(data);
        },
        erro:function(){
            
        },
        beforeSend:function(){
            
        }
        
    })
}
function getActionEstado(){
    const uf = $("#estado").find(":selected").attr("value");
    getCidade(uf);
}
function getNewElementCidade(data){
    $("#label-Cidade").remove();
    $("#cidade").remove();

    let select = '<label id="label-Cidade">Selecione a Cidade: </label>'+
                 '<select id="cidade"></select>';
    let option = "";    
    $.each(data, function(i, e){
        option += `<option value="${e.nome}">${e.nome}</option>`
    })
    $(select).appendTo("#janela-conteudo");
    $(option).appendTo("#cidade");
}