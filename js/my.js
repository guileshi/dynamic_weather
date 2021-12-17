$('#switch').click(() => {

    $('.cellphone__screen').toggleClass('hide unhide')
    $('.cellphone__filter').toggleClass('hide unhide')

})


var x = document.getElementById("demo");
    
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    }

$(window).load(function () {

    getLocation();

})