
function getEstado(){    
    $.ajax({
        type:"GET",
        url:"https://servicodados.ibge.gov.br/api/v1/localidades/estados",        
        dataType:"json",
        success:function(data){            
            let option = '<option value="">Selecione um estado</option>'
            $.each(data, function(i,e){
                option += `<option value="${e.sigla}" id="${e.id}>${e.nome}</option>`
            });
            $(option).appendTo("#estado");
        },
        erro:function(){
            
        },
        beforeSend:function(){
            
        }
        
    })
}