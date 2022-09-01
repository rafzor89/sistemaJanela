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