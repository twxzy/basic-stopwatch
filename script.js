let h = document.getElementById('horas')
let m = document.getElementById('minutos')
let s = document.getElementById('segundos')

let milessimo = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;

let intervalId;

function start() {
    intervalId = setInterval(() => {
        milessimo += 10;

        if (milessimo === 1000) {
            milessimo = 0;
            segundos++;

            if (segundos < 10) {
                s.innerHTML = "0" + segundos;
            } else {
                s.innerHTML = segundos;
            }
        }

        if (segundos === 59) {
            segundos = 0;
            minutos++;

            if (minutos < 10) {
                m.innerHTML = "0" + minutos;
            } else {
                m.innerHTML = minutos;
            }
        }

        if (minutos === 59) {
            minutos = 0;
            horas++;

            if (horas < 10) {
                h.innerHTML = "0" + horas;
            } else {
                h.innerHTML = horas;
            }
        }
    }, 10);
}

function pause(){
    clearInterval(intervalId);
}