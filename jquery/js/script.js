$(function(){
    $('#azul').click(function(){
        $('h1').css('color','blue'); // esconde
        $('h1').fadeOut()
    });
    $('#vermelho').click(function(){
        ('h1')
        .css('color','red')
        .text('cor alterada')
        .css({fontSize:'30px'}, {color: 'red'})
        .fadeOut('3000');

    });
})