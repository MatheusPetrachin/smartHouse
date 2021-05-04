var acesa_1 = true;
var acesa_2 = true;
var acesa_3 = true;
var acesa_4 = true;
var acesa_5 = true;
var acesa_6 = true;

function mudaLuz(tipo) {

    if (tipo == 'quarto-Visitas') {
        if (acesa_1 == true) {
            /*$('#Quarto-Visitas').addClass('mudaLuzDesliga');*/
            document.getElementById("Quarto-Visitas").src = "";
            acesa_1 = false;
            var led = '1off';
            fazerRequisicao(led);
            /* alert("A luz vai ser apagada!!!")*/
        } else if (acesa_1 == false) {
            document.getElementById("Quarto-Visitas").src = "imagens/planta/comodos/" + tipo + ".png";
            acesa_1 = true;
            var led = '1on';
            fazerRequisicao(led);
            /* alert("A luz vai ser acesa!!!");*/
        }
    } else if (tipo == 'sala-Estar') {
        if (acesa_2 == true) {
            document.getElementById("Sala-Estar").src = "";
            acesa_2 = false;
            var led = '2off';
            fazerRequisicao(led);
            /* alert("A luz vai ser apagada!!!")*/
        } else if (acesa_2 == false) {
            document.getElementById("Sala-Estar").src = "imagens/planta/comodos/" + tipo + ".png";
            acesa_2 = true;
            var led = '2on';
            fazerRequisicao(led);
            /* alert("A luz vai ser acesa!!!");*/
        }
    } else if (tipo == 'quarto-Casal') {
        if (acesa_3 == true) {
            document.getElementById("Quarto-Casal").src = "";
            acesa_3 = false;
            var led = '3off';
            fazerRequisicao(led);
            /* alert("A luz vai ser apagada!!!")*/
        } else if (acesa_3 == false) {
            document.getElementById("Quarto-Casal").src = "imagens/planta/comodos/" + tipo + ".png";
            acesa_3 = true;
            var led = '3on';
            fazerRequisicao(led);
            /* alert("A luz vai ser acesa!!!");*/
        }
    } else if (tipo == 'hall') {
        if (acesa_4 == true) {
            document.getElementById("Hall").src = "";
            acesa_4 = false;
            var led = '4off';
            fazerRequisicao(led);
            /* alert("A luz vai ser apagada!!!")*/
        } else if (acesa_4 == false) {
            document.getElementById("Hall").src = "imagens/planta/comodos/" + tipo + ".png";
            acesa_4 = true;
            var led = '4on';
            fazerRequisicao(led);
            /* alert("A luz vai ser acesa!!!");*/
        }
    } else if (tipo == 'cosinha') {
        if (acesa_5 == true) {
            document.getElementById("Cosinha").src = "";
            acesa_5 = false;
            var led = '5off';
            fazerRequisicao(led);
            /* alert("A luz vai ser apagada!!!")*/
        } else if (acesa_5 == false) {
            document.getElementById("Cosinha").src = "imagens/planta/comodos/" + tipo + ".png";
            acesa_5 = true;
            var led = '5on';
            fazerRequisicao(led);
            /* alert("A luz vai ser acesa!!!");*/
        }
    } else if (tipo == 'banheiro') {
        if (acesa_6 == true) {
            document.getElementById("Banheiro").src = "";
            acesa_6 = false;
            var led = '6off';
            fazerRequisicao(led);
            /* alert("A luz vai ser apagada!!!")*/
        } else if (acesa_6 == false) {
            document.getElementById("Banheiro").src = "imagens/planta/comodos/" + tipo + ".png";
            acesa_6 = true;
            var led = '6on';
            fazerRequisicao(led);
            /* alert("A luz vai ser acesa!!!");*/
        }
    }
}

function fazerRequisicao(led) {

    var url = "http://179.97.142.92:80/" + led;

    win = window.open(url, 'Windows', 'width=30,height=30');

    // var xhttp = new XMLHttpRequest();
    // xhttp.open("POST", url);
    // xhttp.send();
    /*A execução do script pára aqui até a requisição retornar do servidor*/

}