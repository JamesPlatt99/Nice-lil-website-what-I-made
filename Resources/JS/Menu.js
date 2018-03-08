var curPage = "Home";
function loadPage(pageToLoad) {    
    if(!document.getElementById('#' + pageToLoad)){
        pageToLoad = 'Home';
    }
    if(pageToLoad != curPage){
        $("#" + pageToLoad).slideDown();
        $("#" + curPage).hide();   
    }
    curPage = pageToLoad;
}
