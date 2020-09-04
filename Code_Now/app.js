//:sweating:


$(document).ready(function() {
    let alter_m_nav = function() {
        let vw = document.body.clientWidth;
        if (vw > 768) {
            $('#catNav').addClass('ml-5');
            $('#blogNav').addClass('ml-5');
            $('#aboutNav').addClass('ml-5');
            $('#userAuthUL').addClass('ml-auto');
        };
    };
    $(window).resize(function() {
        alter_m_nav();
    });
    //Fire when page loads
    alter_m_nav();

}); 