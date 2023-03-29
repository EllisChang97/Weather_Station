window.onload = function () {
    
    var toronto_button = document.getElementById("Toronto");
    var yourTown_button = document.getElementById("Yourtown");
    var output_box = document.getElementById("output");
    var out_icon = document.getElementById("icon");
    var out_location = document.getElementById("location");
    var out_temperature = document.getElementById("temperature");
    var out_conditions = document.getElementById("conditions");
    var wind_speed = document.getElementById("wind_speed");

    const myAPIkey = "bc8814a2a241f34ac2404afafe45ff7a";

    let city = null;
    url = "";
    let t_url = "https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=" + myAPIkey + "&units=metric";
    let V_url = "https://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=" + myAPIkey + "&units=metric";
    var show_Toronto = false;
    var show_otherCity = false;

    toronto_button.onclick = function (){
        if (show_Toronto == false){
            output_box.style.display = "block";
            city = "toronto";
            url = t_url;

            show_Toronto = true;
            get_api_info();
        }else
        {
            output_box.style.display = "none";
            show_Toronto = false;
        }
    }


    yourTown_button.onclick = function (){
        if (show_otherCity == false){
            output_box.style.display = "block";
            city = "vancouver";
            url= V_url;
            show_otherCity = true;
            get_api_info();
        }else
        {
            output_box.style.display = "none";
            show_otherCity = false;
        }
    }
    console.log(city);
    console.log(url);

    


    //const myAPIkey = "bc8814a2a241f34ac2404afafe45ff7a";
   // var url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=" + myAPIkey + "&units=metric";
    

    function get_api_info (){
        console.log(city);
        console.log(url);
        let xhr = new XMLHttpRequest ();

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const data = xhr.response;
                    console.log(data); 
    
                    out_location.innerHTML = data.name;
                    out_temperature.innerHTML = data.main.temp+ "°C";
                    out_conditions.innerHTML = data.weather[0].description;
                    wind_speed.innerHTML = data.wind.speed;
                    console.log(data.weather[0].icon);
                    out_icon.src ="./openweathermap-api-icons/icons/" + data.weather[0].icon+ ".png";
                
                } else {
                    out_location.innerHTML = "API call was unsuccessful";
                    console.log(xhr.status);
                }
            }
        }
            
        
    
        xhr.open('GET', url);
    
        xhr.responseType = "json";
    
        xhr.send(null);
    }

};