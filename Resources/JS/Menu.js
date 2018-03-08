$(document).ready(function(){   
    $("#Home").load("Pages/Home.html"); 
    $("#About").load("Pages/About.html"); 
    $("#GreatWebsites").load("Pages/GreatWebsites.html"); 

    $("#About").hide();
    $("#GreatWebsites").hide();

    $("#HomeLink").click(function(){
        $("#About").slideUp();
        $("#GreatWebsites").slideUp();
        $("#Home").slideDown();
    })        
    $("#AboutLink").click(function(){
        $("#Home").slideUp();
        $("#GreatWebsites").slideUp();
        $("#About").slideDown();
    })   

    $("#GreatWebsitesLink").click(function(){
        $("#Home").slideUp();
        $("#About").slideUp();
        $("#GreatWebsites").slideDown();
    })    
});