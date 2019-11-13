function validarRegistro(){
    $('.alert').remove();

    var 
        nombre=$('#nombre').val(),
        edad=$('#edad').val(),
        email=$('#email').val(),
        contrasena=$('#contrasena').val(),
        ciudad=$('#ciudad').val(); 
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
    //validamos la edad    
    if(edad=="" || edad==null){
        reportarError("edad");
        mostrarAlerta("Debes ingresar tu edad.")
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]*$/;
        if(edad<0){
            reportarError("edad");
            mostrarAlerta("Por favor, ingresa una edad válida");
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
    //validamos la contraseña
    if(contrasena==""||contrasena==null){
        reportarError("contrasena");
        mostrarAlerta("Debes ingresar una contraseña.")
        return false;
    }
    //validamos la ciudad
    if(ciudad==""||ciudad==null){
        reportarError("ciudad");
        mostrarAlerta("Debes elegir una ciudad.")
        return false;
    }
    
    $('form').submit();
    return true;
    
}

$('input').focus(function(){
    $('.alert').remove();
    colorDefault('nombre');
    colorDefault('edad');
    colorDefault('email');
    colorDefault('contrasena');
    colorDefault('ciudad');
})
$('select').focus(function(){
    $('.alert').remove();
    colorDefault('ciudad');
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
