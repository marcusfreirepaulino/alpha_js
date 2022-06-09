
document.querySelector('button').addEventListener('click', dateInfo);

function dateInfo() {
    const date = new Date(document.getElementById('date').value + "");
    const day = document.getElementById('day');
    const month = document.getElementById('month');
    const year = document.getElementById('year');
    const weekday = document.getElementById('weekday');
    const monthName = document.getElementById('month-name');
    const timestamp = document.getElementById('timestamp');

    day.textContent = "Dia: " + (date.getUTCDate());
    month.textContent = "Mês: " + (date.getMonth() + 1);
    year.textContent = "Ano: " + date.getFullYear();
    timestamp.textContent = date.getTime();

    switch(date.getUTCDay()){
        case 0:
            weekday.textContent = "Domingo";
            break;
        case 1:
            weekday.textContent = "Segunda-feira";
            break;
        case 2:
            weekday.textContent = "Terça-feira";
            break;
        case 3:
            weekday.textContent = "Quarta-feira";
            break;
        case 4:
            weekday.textContent = "Quinta-feira";
            break;
        case 5:
            weekday.textContent = "Sexta-feira";
            break;
        case 6:
            weekday.textContent = "Sábado";
            break;
    }

    switch(date.getMonth()){
        case 0:
            monthName.textContent = "Janeiro"
            break;
        case 1:
            monthName.textContent = "Fevereiro"
            break;
        case 2:
            monthName.textContent = "Março"
            break;
        case 3:
            monthName.textContent = "Abril"
            break;
        case 4:
            monthName.textContent = "Maio"
            break;
        case 5:
            monthName.textContent = "Junho"
            break;
        case 6:
            monthName.textContent = "Julho"
            break;
        case 7:
            monthName.textContent = "Agosto"
            break;
        case 8:
            monthName.textContent = "Setembro"
            break;
        case 9:
            monthName.textContent = "Outubro"
            break;
        case 10:
            monthName.textContent = "Novembro"
            break;
        case 11:
            monthName.textContent = "Dezembro"
            break;
    }

}

