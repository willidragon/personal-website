$("#content").load("/Content.html");


$(function () {
    $("#links > a").click(function (e) {
        e.preventDefault(); //so the browser doesn't follow the link

        var check = this.href;
        
        $("#content").load(this.href, function () {

            if (check.includes("About.html")) {
                $("#moving-piston").removeClass("left-piston");
                $("#moving-piston").removeClass("mid-piston");
                $("#moving-piston").addClass("right-piston");
                $("#Current-heading").text("ME");
            } else if (check.includes("Content.html")) {
                $("#moving-piston").removeClass("mid-piston");
                $("#moving-piston").removeClass("right-piston");          
                $("#moving-piston").addClass("left-piston");
                
                $("#Current-heading").text("Works");
            }

        });
    });

});
