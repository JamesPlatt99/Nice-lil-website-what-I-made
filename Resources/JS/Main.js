$(document).ready(function(){   
    $('#Content').animate({'right':'0px'}, 1500);
    
    $("#Header").load("Resources/Elements/Header.html"); 
    $("#Menu").load("Resources/Elements/Menu.html"); 
 
    $("#Home").load("Pages/Home.html"); 
    $("#About").load("Pages/About.html"); 
    $("#GreatWebsites").load("Pages/GreatWebsites.html"); 
    
    $("#About").hide();
    $("#GreatWebsites").hide();
    var page = getUrlParameter('page') ? getUrlParameter('page') : 'Home';
    loadPage(page);
});

function getUrlParameter(sParam) {
    var parameters = decodeURIComponent(window.location.search.substring(1)).split('&');
    var parameterName;

    for (var i = 0; i < parameters.length; i++) {
        parameterName = parameters[i].split('=');
        if (parameterName[0] === sParam && parameterName.length == 2) {
            return parameterName[1];
        }
    }
    return null;
};