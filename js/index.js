import timerConfig from "./timer.js"
import soundCards from "./soundCards.js"
import darkModeConfig from "./darkMode.js"

//Variáveis

const mainContainer = document.querySelector('.container')
const minutesDisplay = document.querySelector('.minutes')
const secondDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonMoreTime = document.querySelector('.moretime')
const buttonLessTime = document.querySelector('.lesstime')
const buttonForest = document.querySelector('.card-forest')
const buttonRain = document.querySelector('.card-rain')
const buttonCoffeeShop = document.querySelector('.card-coffee-shop')
const buttonFire = document.querySelector('.card-fire')
const buttonDarkMode = document.querySelector('.dark-mode')
const buttonLightMode = document.querySelector('.light-mode')
const fillForest = document.querySelector('.fill-forest')
const fillRain = document.querySelector('.fill-rain')
const fillCoffeeShop = document.querySelector('.fill-coffe-shop')
const fillFire = document.querySelector('.fill-fire')
const soundCardForest = new Audio('audios/forest.wav')
const soundCardRain = new Audio('audios/rain.wav')
const soundCardCoffeeShop = new Audio('audios/coffeshop.wav')
const soundCardFire = new Audio('audios/fire.wav')
const endTimer = new Audio('audios/endtime.mp3')
const buttonPressAudio = new Audio('audios/buttonpress.wav')
const volumeForest = document.querySelector('#volume-forest')
const volumeRain = document.querySelector('#volume-rain')
const volumeCoffeeShop = document.querySelector('#volume-coffe-shop')
const volumeFire = document.querySelector('#volume-fire')
let timer

//Importações

const importTimer = timerConfig({minutesDisplay, secondDisplay, timer, endTimer, buttonPlay, buttonPause, buttonPressAudio, soundCardForest, soundCardRain, soundCardCoffeeShop, soundCardFire, buttonForest, buttonRain, buttonCoffeeShop, buttonFire, fillForest, fillRain, fillCoffeeShop, fillFire, volumeForest, volumeRain, volumeCoffeeShop, volumeFire, mainContainer})

const eventsSoundCards = soundCards({mainContainer, buttonForest, fillForest, volumeForest, soundCardForest, fillRain, buttonRain, volumeRain, soundCardRain, buttonCoffeeShop, fillCoffeeShop, volumeCoffeeShop, soundCardCoffeeShop, buttonFire, fillFire, volumeFire, soundCardFire})

const dark = darkModeConfig({mainContainer, buttonDarkMode, buttonLightMode, buttonForest, buttonRain, buttonCoffeeShop, buttonFire, fillForest, fillRain, fillCoffeeShop, fillFire, volumeForest, volumeRain, volumeCoffeeShop, volumeFire})

//Controles do timer

buttonPlay.addEventListener('click', function() {
    buttonPressAudio.play()
    if(minutesDisplay.textContent == 0 && secondDisplay.textContent == 0) {
    return
    }
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    importTimer.countDown()
})

buttonPause.addEventListener('click', function(){
    importTimer.pauseTimer()
})

buttonStop.addEventListener('click', function() { 
    importTimer.pauseTimer()
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    if(secondDisplay.textContent <= 0) {
        return
    }
    importTimer.updateTimerDisplay(Number(minutesDisplay.textContent) + 1, 0)
})

buttonMoreTime.addEventListener('click', function() {
    buttonPressAudio.play()
    importTimer.updateTimerDisplay(++minutesDisplay.textContent, secondDisplay.textContent)
})

buttonLessTime.addEventListener('click', function() {
    buttonPressAudio.play()
    if(minutesDisplay.textContent <= 0 && secondDisplay.textContent <= 0) {
    return
    }

    if(minutesDisplay.textContent == 0 && secondDisplay.textContent > 0) {
    return
    }
    importTimer.updateTimerDisplay(--minutesDisplay.textContent, secondDisplay.textContent)
})

//Funções dos cards com sons

volumeForest.addEventListener('input', function() {
    soundCardForest.volume = volumeForest.value
})

volumeRain.addEventListener('input', function(){
    soundCardRain.volume = volumeRain.value
})

volumeCoffeeShop.addEventListener('input', function(){
    soundCardCoffeeShop.volume = volumeCoffeeShop.value
})

volumeFire.addEventListener('input', function(){
    soundCardFire.volume = volumeFire.value
})

buttonForest.addEventListener('click', function() {
    eventsSoundCards.buttonForestCard()
})

buttonRain.addEventListener('click', function(){    
    eventsSoundCards.buttonRainCard()
})

buttonCoffeeShop.addEventListener('click', function(){
    eventsSoundCards.buttonCoffeeShopCard()
})

buttonFire.addEventListener('click', function(){
    eventsSoundCards.buttonFireCard()
})

//Funções DarkMOD

buttonDarkMode.addEventListener('click', function(){
    buttonPressAudio.play()
    dark.controlsDarkMode()
    dark.addColorsCardDarkMode()
    dark.addColorsInput()
    dark.changeBackgroundDark()
})

buttonLightMode.addEventListener('click', function(){
    buttonPressAudio.play()
    dark.controlsDarkMode()
    dark.removeColorsCardDarkMode()
    importTimer.removeColorsInput()
    dark.changeBackgroundLight()
    dark.changeInputColorCard()
})