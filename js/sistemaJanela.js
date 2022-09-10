const menu = "#menu-ativo";
function start(){
    
    if($(menu).is(":visible")){
        esconderElemento($(menu));
    }else{
        mostrarElemento($(menu));
    }    
}
function esconderElemento(ele){
    $(ele).hide();
}
function mostrarElemento(ele){
    $(ele).show();
}
function abrirJanela(ele){
    //console.log($(ele));

    esconderElemento($(menu));

    $("#janela-conteudo").find(".dados:not(.template)").remove();
    let dados = $("#janela-conteudo").find(".dados.template").clone().removeClass("template");

    $("#janela").find("#icone span").remove();

    if($(ele).hasClass("tabuada")){
        $("<span class='material-symbols-outlined'>calculate</span>");
        $("#janela").find("#title").text("Tabuada");
        $(dados).text("tabuada");
    }
    if($(ele).hasClass("imc")){
        $("#janela").find("#title").text("IMC");
        $(dados).text("IMC");
    }
    if($(ele).hasClass("calculadora")){
        $("#janela").find("#title").text("Calculadora");
        $(dados).text("Calculadora");
    }
    if($(ele).hasClass("ajax")){
        $("#janela").find("#title").text("Exemplo AJAX");
        const form ='<label>CEP:</label>' +
                    '<input type="text" id="cep">' +
                    '<button id="enviar_cep">Enviar</button>';
        $(form).appendTo(dados);
    }
    if($(ele).hasClass("ibge")){
        $("<span class='material-symbols-outlined'>location_on</span>").appendTo($("#janela").find("#icone span"));
        $("#janela").find("#title").text("Exemplo IBGE");
        const select = '<label>Selecione um estado:</label>' +
                       '<select id="estado" onchange="getActionEstado()"></select>';
        $(select).appendTo(dados);
        getEstado();
    }
    $(dados).appendTo("#janela-conteudo");
    $('#janela').show();
}