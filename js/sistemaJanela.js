function start(){
    const menu = "#menu-ativo";
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
    console.log($(ele));
    if($(ele).hasClass("tabuada")){
       $("#janela").find("#janela-conteudo").text("tabuada");
    }
    if($(ele).hasClass("imc")){
        $("#janela").find("#janela-conteudo").text("imc");
    }
    if($(ele).hasClass("calculadora")){
        $("#janela").find("#janela-conteudo").text("calculadora");
    }
    if($(ele).hasClass("ajax")){
        $("#janela").find("#title").text("Exemplo AJAX");
        const form ='<label>CEP:</label>' +
                    '<input type="text" id="cep">' +
                    '<button id="enviar_cep">Enviar</button>';
        $(form).appendTo("#janela-conteudo");
    }
    $('#janela').show();
}