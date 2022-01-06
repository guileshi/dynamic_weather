$('#switch').click(() => {

    $('.cellphone__screen').toggleClass('hide unhide')
    $('.cellphone__filter').toggleClass('hide unhide')

})
    
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            return
        }
    }

    function showPosition(position) {
        $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=095f619a06c58c0dbcb6dd4d2ac13df5&lang=pt_br&units=metric`, response => {

            document.getElementById("localizacao").innerHTML = response.name
            document.getElementById("pais").innerHTML = response.sys.country
            document.getElementById("clima").innerHTML = Math.round(response.main.temp)

        })
    }

    function getData(){
        const data = new Date();

        const days = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"];

        let day = days[data.getDay()];

        const mes = data.getMonth() + 1;
        const dia = data.getDate();
        const ano = data.getFullYear()

        document.getElementById("data").innerHTML = `${dia}/${mes}/${ano}`
        document.getElementById("diaSemana").innerHTML = day;
        document.getElementById("hora").innerHTML = data.getHours()

        var y = data.getMinutes() < 10 ? 0 : '';
        document.getElementById("minuto").innerHTML = `${y}${data.getMinutes()}`
    }

$(window).load(function () {

    getLocation();
    getData();

})

setInterval(getData, 500);



