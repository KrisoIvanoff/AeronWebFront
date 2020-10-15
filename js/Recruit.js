function apply() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if(email){
        if(!ValidateEmail(email)){
            return;
        }
    }
    else {
        document.getElementById("response").innerHTML = "Please enter an e-mail!";
        joinUs();
        return;
    }
    var mcacc = document.getElementById("mcname").value;
    var coun = document.getElementById("country").value;
    var age = document.getElementById("age").value;
    if(isNaN(age)){
        document.getElementById("response").innerHTML = "Invalid age input!";
        joinUs();
        return;
    }
    var data = 'name='+name+'&email='+email+'&mc='+mcacc+'&coun='+coun+'&age='+age;
    var request = new XMLHttpRequest();
    request.open('POST', '/api/recruit', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    request.onreadystatechange = function() {//Call a function when the state changes.
        if(request.readyState == 4 && request.status == 200) {
            var responseText = request.responseText.split(";");
            if(responseText[0] === "error"){
                document.getElementById('response').innerHTML = responseText[1];
                joinUs();
            }
            else{
                document.getElementById('response').innerHTML = "Thank you!";
                document.getElementById('response').onclick = "";
                fadeOut();
            }
        }
    }
    request.send(data);
}
//Call function to FadeOut the form after completion!
function fadeOut() {
    var formArray = document.getElementsByClassName("fadeClass");
    for (let i = 0; i < formArray.length; i++){
        var element = formArray[i];
        element.style.display = "none";
    }
}
//validate Email
function ValidateEmail(mail)
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }
    document.getElementById("response").innerHTML = "Invalid E-mail!"
    joinUs();
    return (false)
}

//Return Join Us Text
function joinUs() {
    setTimeout(response, 2000)
    function response(){
        document.getElementById("response").innerHTML = "Join Us";
    }
}

// Preloader
var time;
var newUserTime = new Date().getHours();
if (19 <= newUserTime || newUserTime <= 8) {time = 'night'}

function logo(){
    if (time=='night') {
        document.getElementById('preloader').src = 'img/dark/logo.png';
    } else {
       document.getElementById('preloader').src = 'img/light/logo.png';
    }
}

window.addEventListener("load", function () {
    const loader = document.querySelector(".preloader");
    loader.className += " hidden"; // class "loader hidden"
    if (time=='night'){
        setTheme("theme-dark");
        document.getElementById("slider").checked = false;
    }else{
        setTheme("theme-light");
        document.getElementById("slider").checked = true;
    }
});

 // function to set a given theme/color-scheme
 function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    if(themeName === "theme-dark"){
        document.getElementById('background').style.backgroundImage = "url('img/dark/background.png')";
        document.getElementById('logo').src="img/dark/logo.png";
        document.getElementById("preloader").src="img/dark/logo.png";
    }
    else {

        document.getElementById('background').style.backgroundImage = "url('img/light/background.png')";
        document.getElementById('logo').src="img/light/logo.png";
    }
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');

    } else {
        setTheme('theme-dark');
    }
}