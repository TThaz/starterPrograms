var começar = document.getElementById("btn_começar");
var parar = document.getElementById("btn_parar");
var resetar = document.getElementById("btn_resetar");

var cont1 = document.getElementById("cont1");
var cont2 = document.getElementById("cont2");
var cont3 = document.getElementById("cont3");

var sec = 0;
var min = 0;
var hor = 0;

var begin;

var active = 0;

function reset() {
    cont1.innerHTML = `00:`; 
    cont2.innerHTML = `00:`; 
    cont3.innerHTML = `00`;

    sec = 0;
    min = 0;
    hor = 0;
};

function zero() {
    if(hor < 10) {cont1.innerText = `0${hor}:`} else {cont1.innerText = `${hor}:`};
    if(min < 10) {cont2.innerText = `0${min}:`} else {cont2.innerText = `${min}:`};
    if(sec < 10) {cont3.innerText = `0${sec}`} else {cont3.innerText = `${sec}`};
}

function segundos() {
    sec++;
    zero();
    if(sec == 60) { 
        sec = 0;
        cont3.innerText = `0${sec}`;
        minutos();
    }
}

function minutos() {
    min++;
    zero();
    if(min == 60) { 
        min = 0;
        cont2.innerText = `0${min}:`;
        hora();
    }
}

function hora() {
    hor++;
    zero();
    if(hor == 24) { 
        hor = 0;
        cont1.innerText = `0${hor}:`
    }
}

function iniciar() {

    if(active == 1) {

    alert("Já está em uso");

    } else if(active == 0) {
    begin = setInterval(segundos, 1000);
    active = 1;
    }
}

function reinicio() {
    clearInterval(begin);
    reset();
    active = 0;
}

function stop() {
    clearInterval(begin);
    active = 0;
}

começar.addEventListener("click", iniciar);

parar.addEventListener("click", stop);

resetar.addEventListener("click", reinicio);