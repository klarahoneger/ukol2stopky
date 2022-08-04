let casNaStrance = document.querySelector('.tadyBudeCas')
let tlacitkoStart = document.querySelector('.start')
sec = 0
min = 0

tlacitkoStart.addEventListener('click', function () {
    casovac = setInterval(function () {
        casNaStrance.textContent = (sec % 60)
        sec++
    }, 100)
})

let tlacitkoRestart = document.querySelector('.restart')
tlacitkoRestart.addEventListener('click', function () {
    clearInterval(casovac)
    casNaStrance.textContent = 0
})

let tlacitkoStop = document.querySelector('.stop')
tlacitkoStop.addEventListener('click', function () {
    clearInterval(casovac)
})
