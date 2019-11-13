function validarInicioSesion(){
    $('.alert').remove();

    var 
        email=$('#email').val(),
        contrasena=$('#contrasena').val();
       
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
     //validamos la contraseña
     if(contrasena==""||contrasena==null){
        reportarError("contrasena");
        mostrarAlerta("Debes ingresar una contraseña.")
        return false;
    }
    $('form').submit();
    return true;
    
}

$('input').focus(function(){
    $('.alert').remove();
    colorDefault('email');
    colorDefault('contrasena');
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
    
  