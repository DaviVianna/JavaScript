window.addEventListener('load', clock);


    function clock() {

    //Buscando elementos no DOM
    let hour = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');


        //Conversao
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
    
        //Resultado
        hour.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
    }
    
    //Tempo 
    let interval = setInterval(clock, 1000);


    



