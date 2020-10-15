var theme = false;
$(function () {
    $("#themeswitch").click(function () {
        $(".dark").switchClass("dark", "light");
        $(".light").switchClass("light", "dark");
        theme = !theme;
        if(theme){
            document.getElementById("logo-div").src="img/dark/logo.png"
        }
        else{
            document.getElementById("logo-div").src="images/icons/logo.png"
        }
    });

});