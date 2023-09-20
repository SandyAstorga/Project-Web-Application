$(function(){
    $('.filter').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-name');
        if(valor === 'todos'){
            $('.cont-work').show('1000');
        }else{
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    let team = $('#equipo').offset().top,
        service = $('#servicio').offset().top,
        work = $('#work').offset().top,
        contact = $('#contact').offset().top;
    
    window.addEventListener('resize', function(){
        let team = $('#equipo').offset().top,
        service = $('#servicio').offset().top,
        work = $('#work').offset().top,
        contact = $('#contact').offset().top;
    });
    
    $('#link-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    $('#link-equipo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: team - 100
        }, 600);
    });

    $('#link-servicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: service - 100
        }, 600);
    });

    $('#link-trabajo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: work - 100
        }, 600);
    });

    $('#link-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contact
        }, 600);
    });
});