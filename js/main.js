const year = document.querySelector('#year')
const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')


//делаем расчеты

const currentYear = new Date().getFullYear();

const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);



function updateCounter () {

    const currentTime = new Date()

    const diff =  nextYear - currentTime;
    
    //Пепревод в дни
    const dayLeft = Math.floor (diff/1000/60/60/24)
    //Пепревод в часы
    const hoursLeft = Math.floor (diff/1000/60/60) % 24
    //Пепревод в минуты
    const minutsLeft = Math.floor (diff/1000/60) % 60
    //Пепревод в секунды 
    const secondLeft =  Math.floor(diff/1000)%60
    
    year.innerText = currentYear + 1
    days.innerText = dayLeft
    seconds.innerText = secondLeft < 10 ? '0' + secondLeft: secondLeft
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft: hoursLeft
    minutes.innerText = minutsLeft < 10 ? '0' + minutsLeft: minutsLeft
}

updateCounter();

  setInterval(updateCounter,1000)






