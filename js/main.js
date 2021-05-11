$(document).ready(function(){

    var icon_perfil = $("#icon-perfil"),
        icon_exp_laboral = $("#icon-exp-laboral"),
        icon_contacto = $("#icon-contacto"),
        icon_estudios = $("#icon-estudios"),
        icon_contacto = $("#icon-contacto");

    icon_perfil.on("click", modal);
    icon_exp_laboral.on("click", modal);
    icon_estudios.on("click", modal);
    icon_contacto.on("click", modal);

    var modal_perfil = $("#perfil"),
            modal_exp_laboral = $("#exp-laboral"),
            modal_estudios = $("#estudios"),
            modal_contacto = $("#contacto");

    function mostrarModal(){
        icon_perfil.addClass("active");
        modal_perfil.addClass("active");
    }

    function modal(){
        

        if($(this).attr("id") == "icon-perfil"){
            removeActive();
            // modal_perfil.css("display", "inline-block");
            modal_perfil.addClass("active");
            $(this).addClass("active");
        }else if($(this).attr("id") == "icon-exp-laboral"){
            removeActive();
            // modal_exp_laboral.css("display", "inline-block");
            modal_exp_laboral.addClass("active");
            $(this).addClass("active");
        }else if($(this).attr("id") == "icon-estudios"){
            removeActive();
            // modal_estudios.css("display", "inline-block");
            modal_estudios.addClass("active");
            $(this).addClass("active");
        }else{ 
            // modal_contacto.css("display", "inline-block");
            removeActive();
            modal_contacto.addClass("active");
            $(this).addClass("active");
        }

    }

    function removeActive(){

        if(icon_perfil.hasClass("active")){
            icon_perfil.removeClass("active");
        }else if(icon_exp_laboral.hasClass("active")){
            icon_exp_laboral.removeClass("active");
        }else if(icon_estudios.hasClass("active")){
            icon_estudios.removeClass("active");
        }else{
            icon_contacto.removeClass("active");
        }

        if(modal_perfil.hasClass("active")){
            modal_perfil.removeClass("active");
            // modal_perfil.css("display", "none");
        }else if(modal_exp_laboral.hasClass("active")){
            modal_exp_laboral.removeClass("active");
            // modal_exp_laboral.css("display", "none");
        }else if(modal_estudios.hasClass("active")){
            modal_estudios.removeClass("active");
            // modal_estudios.css("display", "none");
        }else{
            modal_contacto.removeClass("active");
            // modal_contacto.css("display", "none");
        } 
    }

mostrarModal();

});