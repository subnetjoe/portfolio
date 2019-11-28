
var city = "Orlando";

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=a4f1e1fffd21c3ab5f84c30ea39c7a47", 
    function(data){
    console.log(data);

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var weather = data.weather[0].main;
    var temp = Math.floor(data.main.temp);
    var humid = data.main.humidity + "%";

    $(".icon").attr('src', icon);
    $(".weather").append(weather);
    $(".temp").append(temp);
    $(".humid").append(humid);
    }
);