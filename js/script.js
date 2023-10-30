//Tempo
const ElementoHoras = document.querySelector('#horas');
const ElementoMinutos = document.querySelector('#minutos');
const ElementoSegundos = document.querySelector('#segundos');

//Tempo
const ElementoHorasT = document.querySelector('#horasT');
const ElementoMinutosT = document.querySelector('#minutosT');
const ElementoSegundosT = document.querySelector('#segundosT');

//Div que contém conteudo do temporizador ou cronometro
const ElCronometro = document.querySelector('.cronometro');
const ElTemporizador = document.querySelector('.temporizador')

//Botões do header para selecionar opção de relógio
const cronometro = document.querySelector('#cronometro');
const temporizador = document.querySelector('#temporizador');

//Botões para realizar as ações do cronômetro
const inicioBtn = document.querySelector('#inicio');
const pausaBtn = document.querySelector('#pausa');
const continuarBtn = document.querySelector('#continua');
const resetarBtn = document.querySelector('#resetar');

//Botões para realizar as ações do temporizador
const inicioTempBtn = document.querySelector('#inicioTemp');
const pausaTempBtn = document.querySelector('#pausaTemp');
const continuarTempBtn = document.querySelector('#continuaTemp');
const resetarTempBtn = document.querySelector('#resetarTemp');

//Setas para Somar ou subtrair tempo
const setaCima = document.querySelector('#setaCima');
const setaBaixo = document.querySelector('#setaBaixo');
const maisHoras = document.querySelector('#maisHoras');
const maisMinutos = document.querySelector('#maisMinutos');
const maisSegundos = document.querySelector('#maisSegundos');
const menosHoras = document.querySelector('#-horas');
const menosMinutos = document.querySelector('#-minutos');
const menosSegundos = document.querySelector('#-segundos');



let intervalo;
let intervaloTemp;
let horas = 0;
let minutos = 0;
let segundos = 0;

let pausado = false;



//Botão para alternar para temporizador
temporizador.addEventListener('click', temporizar);

//Botão para alternar para cronômetro
cronometro.addEventListener('click', cronometrar);

function iniciarCronometro(){

    //Botão iniciar
    inicioBtn.addEventListener('click', iniciar);

    //Botão pausar
    pausaBtn.addEventListener('click', pausarTempo);

    //Botão continuar
    continuarBtn.addEventListener('click', continuarTempo);

    //Botão resetar
    resetarBtn.addEventListener('click', resetarTempo);

function iniciar() {
    intervalo = setInterval(() => {
        if(!pausado) {
            segundos += 1;  
        
        if(segundos === 60){
            minutos++;
            segundos = 0;
        }
        if(minutos === 60) {
            horas++
            minutos = 0;
        }

        ElementoHoras.textContent = formatarTempo(horas);
        ElementoMinutos.textContent = formatarTempo(minutos);
        ElementoSegundos.textContent = formatarTempo(segundos);
    }
    }, 1000)
    inicioBtn.style.display= 'none';
    pausaBtn.style.display= 'block';
    resetarBtn.style.display = 'block';
}

function formatarTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

function pausarTempo() {
    pausado = true;
    pausaBtn.style.display='none';
    continuarBtn.style.display='block';
    resetarBtn.style.display = 'block';
}

function continuarTempo() {
    pausado = false;
    pausaBtn.style.display ='block';
    continuarBtn.style.display='none';
}

function resetarTempo() {
    clearInterval(intervalo);
    horas = 0;
    minutos = 0;
    segundos = 0;

    ElementoHoras.textContent = "00";
    ElementoMinutos.textContent = "00";
    ElementoSegundos.textContent = "00";

    inicioBtn.style.display = 'block';
    pausaBtn.style.display = 'none';
    continuarBtn.style.display = 'none';
    resetarBtn.style.display = 'none';
}
}
iniciarCronometro();


function iniciarTemporizador(){
    contagem = false;
    let horasTemp = 0;  
    let minutosTemp = 0;
    let segundosTemp = 0;

    //Botão iniciar
    inicioTempBtn.addEventListener('click', iniciarTemp);
/*
    //Botão pausar
    pausaBtn.addEventListener('click', pausarTempo);

    //Botão continuar
    continuarBtn.addEventListener('click', continuarTempo);

    //Botão resetar
    resetarBtn.addEventListener('click', resetarTempo);
    */
    //Botão para adicionar tempo
    maisHoras.addEventListener('click', incrementarh);
    maisMinutos.addEventListener('click', incrementarm);
    maisSegundos.addEventListener('click', incrementars);

    //Botão para subtrair tempo
    menosHoras.addEventListener('click', decrementarh);
    menosMinutos.addEventListener('click', decrementarm);
    menosSegundos.addEventListener('click', decrementars);

    function incrementarh(){
        if(!contagem && horasTemp < 23) {
            horasTemp++;
            ElementoHorasT.textContent = formatarTempo(horasTemp);
        }
    }
    function incrementarm(){
        if(!contagem && minutosTemp < 59) {
            minutosTemp++;
            ElementoMinutosT.textContent = formatarTempo(minutosTemp);
        }
    }
    function incrementars(){
        if(!contagem && segundosTemp < 59) {
            segundosTemp++;
            ElementoSegundosT.textContent = formatarTempo(segundosTemp);
        }
    }

    function decrementarh(){
        if(!contagem && horasTemp > 0) {
            horasTemp--;
            ElementoHorasT.textContent = formatarTempo(horasTemp);
        }
    }
    function decrementarm(){
        if(!contagem && minutosTemp > 0) {
            minutosTemp--;
            ElementoMinutosT.textContent = formatarTempo(minutosTemp);
        }
    }
    function decrementars(){
        if(!contagem && segundosTemp > 0) {
            segundosTemp--;
            ElementoSegundosT.textContent = formatarTempo(segundosTemp);
        }
    }

    function formatarTempo(tempo) {
        return tempo < 10 ? `0${tempo}` : tempo;
        }

    function iniciarTemp() {
        contagem = true;

      intervaloTemp = setInterval(() => {
        if (segundosTemp > 0) {
            segundosTemp -= 1;
        } else if (minutosTemp > 0) {
            minutosTemp--;
            segundosTemp = 59;
        } else if (horasTemp > 0) {
            horasTemp--;
            minutosTemp = 59;
            segundosTemp = 59;
        } else {
            clearInterval(intervaloTemp);
            window.alert('O tempo acabou!');
            contagem = false;
        }
        
        ElementoHorasT.textContent = formatarTempo(horasTemp);
        ElementoMinutosT.textContent = formatarTempo(minutosTemp);
        ElementoSegundosT.textContent = formatarTempo(segundosTemp);
    }, 1000);
    }

}
iniciarTemporizador();



function cronometrar() {
    setaCima.style.display = 'none';
    setaBaixo.style.display = 'none';
    cronometro.style.color = '#4392f1';
    temporizador.style.color = '#454851';
    ElTemporizador.style.display ='none';
    ElCronometro.style.display = 'block';
}

function temporizar() {
    ElTemporizador.style.display = 'block';
    ElCronometro.style.display = 'none';
    setaCima.style.display = 'flex';
    setaBaixo.style.display = 'flex';
    cronometro.style.color = '#454851';
    temporizador.style.color = '#4392f1';
}
