$( document ).ready(function() {
    $(".switch-lang").click(function (event) {
        $('.lang-block:not(.'+ $(this).data('lang') +')').addClass('hidden')
        $('.lang-block.'+ $(this).data('lang')).removeClass('hidden')
        $('.switch-lang').removeClass('active')
        $(this).addClass('active')
    })
});