function validarEmail(){
    $('.alert').remove();

    var
        email=$('#email').val();
    //validamos el email    
    if(email=="" || email==null){
        reportarError("email");
        mostrarAlerta("Debes ingresar tu email")
        return false;
    }else{
        var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!expresion.test(email)){
            reportarError("email");
            mostrarAlerta("Por favor, ingresa un email válido");
            return false;
        }
    }
    $('form').submit();
    return true;
}
$('input').focus(function(){
    $('.alert').remove();
    colorDefault('email');
})


function colorDefault(dato){
    $('#' +dato).css({
        border: "1px solid #999"
    });
}
function reportarError(dato){
    $('#' +dato).css({
        border: "1px solid #dd5144"
    });
}
function mostrarAlerta(texto){
    $('#email').before('<div class="alert alert-danger">Espera: '+texto+'</div>');
}
function mensaje(texto){
    $('.submit').before('<div class="alert alert-success">Gracias! '+texto+'</div>');
}