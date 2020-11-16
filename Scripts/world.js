// Global variables
// Gets the button and input-field
var country_btn = document.getElementById("lookup");
var city_btn = document.getElementById("lookup2");
var input_field = document.getElementById("country");

var display = document.getElementById("result");
var error_msg = "An error has occured";
var php_result; // Should hold the php list result

// Driver function
var driver = function(){

    // Runs function when the country button is clicked
    country_btn.onclick = function(event){

        event.preventDefault();

        let user_input = input_field.value;
        var url = "world.php?country=" + user_input + "&context=";
        
        http_stuff(url);
    }

    // Runs function when the city button is clicked
    country_btn.onclick = function(event){

        event.preventDefault();

        let user_input = input_field.value;
        var url = "world.php?country=" + user_input + "&context=cities";

        http_stuff(url);
    }
}

// Does the HTTP requesting
function http_stuff(url){

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {

        if (httpRequest.readyState === XMLHttpRequest.DONE) {

            if (httpRequest.status === 200) {

                php_result = httpRequest.responseText;
                console.log(php_result);
                
                display.innerHTML = php_result;
            }
            else {
                alert(error_msg);
            }
        }
    }

    httpRequest.open('GET', url, true);
    httpRequest.send();

}

// Runs this function on startup
window.onload = driver;
