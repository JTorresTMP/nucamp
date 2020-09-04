

//NAV JQUERY
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

//SIGN UP ICONS

$(document).ready(function() {
    let alter_icon_spacing = function() {
        let vw = document.body.clientWidth;

        if (vw <= 340) {
            $('#googleIcon').removeClass('mr-2');
            $('#appleIcon').removeClass('mr-2');
            $('#githubIcon').removeClass('mr-2');
            $('#linkedinIcon').removeClass('mr-2');
            $('#googleIcon').addClass('mr-1');
            $('#appleIcon').addClass('mr-1');
            $('#githubIcon').addClass('mr-1');
            $('#linkedinIcon').addClass('mr-1');
        } else {
            $('#googleIcon').removeClass('mr-1');
            $('#appleIcon').removeClass('mr-1');
            $('#githubIcon').removeClass('mr-1');
            $('#linkedinIcon').removeClass('mr-1');
            $('#googleIcon').addClass('mr-2');
            $('#appleIcon').addClass('mr-2');
            $('#githubIcon').addClass('mr-2');
            $('#linkedinIcon').addClass('mr-2');
        }
    };
    $(window).resize(function() {
        alter_icon_spacing();
    })

    alter_icon_spacing();
})