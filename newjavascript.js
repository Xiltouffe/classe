/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function(){
    var x = "";
    var xx = "";
    
    var i = 0;
    var ii = 0;
    
    $("#remplir").click(function(){        
        $(".rond, .carre, .losange").removeClass("fond");
        $(".rond, .carre, .losange").addClass("fond");         
    });
    
    $("#vider").click(function(){        
        $(".rond, .carre, .losange").removeClass("fond");      
    });
    
    $(".rond").click(function(){        
        $(this).toggleClass("fond");     
    }); 
    
  
    
  
    
});