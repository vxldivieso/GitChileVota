function validarFormulario(){
    $('.alert').remove();

    var 
        nombre=$('#nombre').val(),
        apellido=$('#apellido').val(),
        email=$('#email').val(),
        asunto=$('#asunto').val(),
        mensaje=$('#mensaje').val();
        //validamos el nombre 
    if(nombre=="" || nombre==null){
        reportarError("nombre");
        mostrarAlerta("Debes ingresar tu nombre")
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]*$/;
        if(!expresion.test(nombre)){
            reportarError("nombre");
            mostrarAlerta("No se permiten caracteres especiales o números");
            return false;
        }
    }
    //validamos el apellido
    if(apellido=="" || apellido==null){
        reportarError("apellido");
        mostrarAlerta("Debes ingresar tu apellido")
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]*$/;
        if(!expresion.test(apellido)){
            reportarError("apellido");
            mostrarAlerta("No se permiten caracteres especiales o números");
            return false;
        }
    }
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
    //validamos el asunto    
    if(asunto=="" || asunto==null){
        reportarError("asunto");
        mostrarAlerta("Debes ingresar el asunto")
        return false;
    }
    //validamos el mensaje    
    if(mensaje=="" || mensaje==null){
        reportarError("mensaje");
        mostrarAlerta("Debes ingresar tu mensaje")
        return false;
    }
    $('form').submit();
    return true;
    
}

$('input').focus(function(){
    $('.alert').remove();
    colorDefault('nombre');
    colorDefault('apellido');
    colorDefault('email');
    colorDefault('asunto');
})
$('textarea').focus(function(){
    $('.alert').remove();
    colorDefault('mensaje');
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
    $('#nombre').before('<div class="alert alert-danger">Espera: '+texto+'</div>');
}
function mensaje(texto){
    $('.submit').before('<div class="alert alert-success">Gracias! '+texto+'</div>');
}
function contactoExitoso(){
    if(validarFormulario()==true){
        mensaje("Te responderemos a la brevedad!");
    }
}

    