$(function() {
    $(".jquery-a > a").click(function(e) {
        e.preventDefault(); //so the browser doesn't follow the link
        
        var check = this.href;
        $("#content").load(this.href, function() {
            //console.log($("#home-page-text"));
                
            $("#moving-piston").removeClass("right-piston");
                $("#moving-piston").removeClass("left-piston");
                $("#moving-piston").addClass("mid-piston");
                
            
                if (check.includes("WaitingGame.html")){
                    $("#Current-heading").text("Waiting Game");
                }
            
            if (check.includes("Giants.html")){
                    $("#Current-heading").text("Giant");
                }
            
            if (check.includes("WhiteMemo.html")){
                    $("#Current-heading").text("White Memo");
                }
            
            if (check.includes("MealMaker.html")){
                    $("#Current-heading").text("Meal Maker");
                }
            
            
            
        });
    });
    
});