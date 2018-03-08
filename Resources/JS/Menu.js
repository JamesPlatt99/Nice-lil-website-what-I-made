$(document).ready(function(){   
    $("#Home").load("Pages/Home.html"); 
    $("#About").load("Pages/About.html"); 
    $("#GreatWebsites").load("Pages/GreatWebsites.html"); 

    $("#About").hide();
    $("#GreatWebsites").hide();
    
    $("#HomeLink").click(function(){
        $("#About").hide();
        $("#GreatWebsites").hide();
        $("#Home").show();
    });        
    $("#AboutLink").click(function(){
        $("#Home").hide();
        $("#GreatWebsites").hide();
        $("#About").show();
    });
    $("#GreatWebsitesLink").click(function(){
        $("#Home").hide();
        $("#About").hide();
        $("#GreatWebsites").show();
    });
});
