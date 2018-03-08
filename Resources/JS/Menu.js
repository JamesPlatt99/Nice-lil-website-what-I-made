$(document).ready(function(){   
    $("#Home").load("Pages/Home.html"); 
    $("#About").load("Pages/About.html"); 
    $("#GreatWebsites").load("Pages/GreatWebsites.html"); 

    $("#About").hide();
    $("#GreatWebsites").hide();
    
});
var curPage = "Home";
function loadPage(pageToLoad) {    
    if(pageToLoad != curPage){
        $("#" + pageToLoad).slideDown();
        $("#" + curPage).hide();   
    }
    curPage = pageToLoad;
   //False return prevents page refresh
   return false;
}
