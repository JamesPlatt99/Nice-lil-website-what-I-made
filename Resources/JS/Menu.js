$(document).ready(function(){   
    $("#Home").load("Pages/Home.html"); 
    $("#About").load("Pages/About.html"); 
    $("#GreatWebsites").load("Pages/GreatWebsites.html"); 

    $("#About").hide();
    $("#GreatWebsites").hide();
    
});
 function loadPage(pageToLoad) {
    $("#Home").hide();
    $("#About").hide();
    $("#GreatWebsites").hide();
    
    $("#" + pageToLoad).show();    
    //False return prevents page refresh
    return false;
 }