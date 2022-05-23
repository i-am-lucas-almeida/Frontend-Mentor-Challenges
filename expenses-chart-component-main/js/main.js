const content__graphic = document.querySelector(".content__graphic");

function getData() {

    axios.get('data.json')

        .then(function (resp) {

            renderGraphic(resp.data);

        }).catch(function (error) {

            console.log(error);

        })

}

getData();

function renderGraphic(data) {

    data.forEach(i => {

        const column = document.createElement('div');
        column.setAttribute('class', 'column__c');
        column.innerHTML = `

            <div class='column__graphic
                ${currentDay() === (i.day) && 'isToday'}' 
                style="height: ${(i.amount * 2.5)}px;">
            </div>

            <p class='column__amount'>$${i.amount}</p>

            <p class='column__day'>${i.day}</p>
        
        `

        content__graphic.appendChild(column);

    });

}

const day = new Date();
const current__day = day.getDay();

function currentDay() {

    let isToday = '';

    switch (current__day) {

        case 0:
            isToday = 'sun';
            break;
        case 1:
            isToday = 'mon';
            break;
        case 2:
            isToday = 'tue';
            break;
        case 3:
            isToday = 'wed';
            break;
        case 4:
            isToday = 'thu';
            break;
        case 5:
            isToday = 'fri';
            break;
        case 6:
            isToday = 'sat';
            break;

        default:
            isToday = '';

    }

    return isToday;

}