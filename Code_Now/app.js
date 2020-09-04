//:sweating:


$(document).ready(function() {
    let alter_m_nav = function() {
        let vw = document.body.clientWidth;
        if (vw >= 768) {
            $('#catNav').addClass('ml-5');
            $('#blogNav').addClass('ml-5');
            $('#aboutNav').addClass('ml-5');
            $('#userAuthUL').addClass('ml-auto');
            $('#LogInButton').removeClass('mt-3');
            $('#signUpButton').removeClass('mt-2');
        } else if (vw < 768) {
            $('#userAuthUL').removeClass('ml-auto');
            $('#LogInButton').addClass('mt-3');
            $('#signUpButton').addClass('mt-2');
            $('#catNav').removeClass('ml-5');
            $('#blogNav').removeClass('ml-5');
            $('#aboutNav').removeClass('ml-5');
        }
    };
    $(window).resize(function() {
        alter_m_nav();
    });
    //Fire when page loads
    alter_m_nav();

}); 