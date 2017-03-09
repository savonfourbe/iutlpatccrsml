function affichage_contenu(){
    if($('.over').length != 0){
        $('.menu-espanso').toggleClass('z-depth-5');
        $('.menu-in').toggleClass('over');
        $('.bouton_anim').toggleClass('anim');
    }else{
        var x = setTimeout("$('.menu-espanso').toggleClass('z-depth-5')", 350);
        $('.menu-in').toggleClass('over');
        $('.bouton_anim').toggleClass('anim');
    }; 
};