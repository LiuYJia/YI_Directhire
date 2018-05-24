$(document).ready(function() { 
    
    
    window.name = '<%=currentPage%>' ;
    
    document.getElementById('kk').onclick=function(){
        // alert(window.name); 
    
    $.ajax({
        type: 'get',
        url:'/xxx'
        }).done(function(results){
        alert(results);
    })
}


}); 