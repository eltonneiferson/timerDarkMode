
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

//Funções

function controlsDarkMode() {
    document.querySelector('.pathPlay').classList.toggle('fillColor')
    document.querySelector('.pathPause').classList.toggle('fillColor')
    document.querySelector('.pathPauseD').classList.toggle('fillColor')
    document.querySelector('.pathPauseE').classList.toggle('fillColor')
    document.querySelector('.pathStop').classList.toggle('fillColor')
    document.querySelector('.pathMoreTime').classList.toggle('fillColor')
    document.querySelector('.pathLessTime').classList.toggle('fillColor')
    mainContainer.classList.toggle('darkMode')
    buttonDarkMode.classList.toggle('hide')
    buttonLightMode.classList.toggle('hide')
}

function addColorsCardDarkMode() {
    buttonForest.classList.add('bgCardDarkMode')
    fillForest.classList.add('fillColor')
    buttonRain.classList.add('bgCardDarkMode')
    fillRain.classList.add('fillColor')
    buttonCoffeeShop.classList.add('bgCardDarkMode')
    fillCoffeeShop.classList.add('fillColor')
    buttonFire.classList.add('bgCardDarkMode')
    fillFire.classList.add('fillColor')
}

function removeColorsCardDarkMode() {
    buttonForest.classList.remove('bgCardDarkMode')
    fillForest.classList.remove('fillColor')
    buttonRain.classList.remove('bgCardDarkMode')
    fillRain.classList.remove('fillColor')
    buttonCoffeeShop.classList.remove('bgCardDarkMode')
    fillCoffeeShop.classList.remove('fillColor')
    buttonFire.classList.remove('bgCardDarkMode')
    fillFire.classList.remove('fillColor')
}

function addColorsInput(){
    volumeForest.classList.add('inputColor')
    volumeForest.classList.add('inputColorBall')
    volumeRain.classList.add('inputColor')
    volumeRain.classList.add('inputColorBall')
    volumeCoffeeShop.classList.add('inputColor')
    volumeCoffeeShop.classList.add('inputColorBall')
    volumeFire.classList.add('inputColor')
    volumeFire.classList.add('inputColorBall')
}

function removeColorsInput() {
    volumeForest.classList.remove('inputColor')
    volumeForest.classList.remove('inputColorBall')
    volumeRain.classList.remove('inputColor')
    volumeRain.classList.remove('inputColorBall')
    volumeCoffeeShop.classList.remove('inputColor')
    volumeCoffeeShop.classList.remove('inputColorBall')
    volumeFire.classList.remove('inputColor')
    volumeFire.classList.remove('inputColorBall')
}

function resetFocusTimer() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    soundCardForest.pause()
    soundCardRain.pause()
    soundCardCoffeeShop.pause()
    soundCardFire.pause()

    if(mainContainer.classList.contains('darkMode')){
        buttonForest.classList.remove('bgCardDarkModeClick')
        buttonRain.classList.remove('bgCardDarkModeClick')
        buttonCoffeeShop.classList.remove('bgCardDarkModeClick')
        buttonFire.classList.remove('bgCardDarkModeClick')
    } else {
        buttonForest.classList.remove('bgCard')
        buttonRain.classList.remove('bgCard')
        buttonCoffeeShop.classList.remove('bgCard')
        buttonFire.classList.remove('bgCard')
        fillForest.classList.remove('fillColor')
        fillRain.classList.remove('fillColor')
        fillCoffeeShop.classList.remove('fillColor')
        fillFire.classList.remove('fillColor')
        removeColorsInput()
    }
}

function updateTimerDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondDisplay.textContent = String(seconds).padStart(2, "0")
}

function countDown(){
    timer = setTimeout(function(){
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondDisplay.textContent)
        
        if(minutes <= 0 && seconds <= 0){
            endTimer.play()
            resetFocusTimer()
            return
        } 
        
        if(seconds <= 0) {
            seconds = 60
            --minutes
        }
        
        updateTimerDisplay(minutes, seconds - 1)
        countDown() 
    }, 1000)
}

//Eventos

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

buttonPlay.addEventListener('click', function() {
    buttonPressAudio.play()
    
    if(minutesDisplay.textContent == 0 && secondDisplay.textContent == 0) {
        return
    }
    
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    countDown()
})

buttonPause.addEventListener('click', function(){
    buttonPressAudio.play()
    clearTimeout(timer)
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
})

buttonStop.addEventListener('click', function() { 
    buttonPressAudio.play()
    
    if(secondDisplay.textContent <= 0) {
        return
    } else {
        clearTimeout(timer)
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
        updateTimerDisplay(Number(minutesDisplay.textContent) + 1, 0)
    }
})

buttonMoreTime.addEventListener('click', function() {
    buttonPressAudio.play()
    updateTimerDisplay(++minutesDisplay.textContent, secondDisplay.textContent)
})

buttonLessTime.addEventListener('click', function() {
    buttonPressAudio.play()
    
    if(minutesDisplay.textContent <= 0 && secondDisplay.textContent <= 0) {
        return
    }
    
    if(minutesDisplay.textContent == 0 && secondDisplay.textContent > 0) {
        return
    }
    updateTimerDisplay(--minutesDisplay.textContent, secondDisplay.textContent)
})

buttonForest.addEventListener('click', function() {
    if(mainContainer.classList.contains('darkMode')){
        buttonForest.classList.toggle('bgCardDarkModeClick')
    } else {
        buttonForest.classList.toggle('bgCard')
        fillForest.classList.toggle('fillColor')
        volumeForest.classList.toggle('inputColor')
        volumeForest.classList.toggle('inputColorBall')
    }
    
    if(buttonForest.classList.contains('bgCard') || buttonForest.classList.contains('bgCardDarkModeClick')){
        soundCardForest.play()
        soundCardForest.loop = true
    } else {
        soundCardForest.pause()
    }
})

buttonRain.addEventListener('click', function(){    
    if(mainContainer.classList.contains('darkMode')){
        buttonRain.classList.toggle('bgCardDarkModeClick')
    } else {
        fillRain.classList.toggle('fillColor')
        buttonRain.classList.toggle('bgCard')
        volumeRain.classList.toggle('inputColor')
        volumeRain.classList.toggle('inputColorBall')
    }
    
    if(buttonRain.classList.contains('bgCard')|| buttonRain.classList.contains('bgCardDarkModeClick')){
        soundCardRain.play()
        soundCardRain.loop = true
    } else {
        soundCardRain.pause()
    }
})

buttonCoffeeShop.addEventListener('click', function(){
    if(mainContainer.classList.contains('darkMode')){
        buttonCoffeeShop.classList.toggle('bgCardDarkModeClick')
    } else {
        fillCoffeeShop.classList.toggle('fillColor')
        buttonCoffeeShop.classList.toggle('bgCard')
        volumeCoffeeShop.classList.toggle('inputColor')
        volumeCoffeeShop.classList.toggle('inputColorBall')
    }
    
    if(buttonCoffeeShop.classList.contains('bgCard')|| buttonCoffeeShop.classList.contains('bgCardDarkModeClick')){
        soundCardCoffeeShop.play()
        soundCardCoffeeShop.loop = true
    } else {
        soundCardCoffeeShop.pause()
    }
})

buttonFire.addEventListener('click', function(){
    if(mainContainer.classList.contains('darkMode')){
        buttonFire.classList.toggle('bgCardDarkModeClick')
    } else {
        fillFire.classList.toggle('fillColor')
        buttonFire.classList.toggle('bgCard')
        volumeFire.classList.toggle('inputColor')
        volumeFire.classList.toggle('inputColorBall')
    }
    
    if(buttonFire.classList.contains('bgCard') || buttonFire.classList.contains('bgCardDarkModeClick')){
        soundCardFire.play()
        soundCardFire.loop = true
    } else {
        soundCardFire.pause()
    }
})

buttonDarkMode.addEventListener('click', function(){
    buttonPressAudio.play()
    controlsDarkMode()
    addColorsCardDarkMode()
    addColorsInput()
    buttonForest.classList.replace('bgCard', 'bgCardDarkModeClick')
    buttonRain.classList.replace('bgCard', 'bgCardDarkModeClick')
    buttonCoffeeShop.classList.replace('bgCard', 'bgCardDarkModeClick')
    buttonFire.classList.replace('bgCard', 'bgCardDarkModeClick')
})

buttonLightMode.addEventListener('click', function(){
    buttonPressAudio.play()
    controlsDarkMode()
    removeColorsCardDarkMode()
    removeColorsInput()
    buttonForest.classList.replace( 'bgCardDarkModeClick', 'bgCard')
    buttonRain.classList.replace( 'bgCardDarkModeClick', 'bgCard')
    buttonCoffeeShop.classList.replace( 'bgCardDarkModeClick', 'bgCard')
    buttonFire.classList.replace( 'bgCardDarkModeClick', 'bgCard')

    if(buttonForest.classList.contains('bgCard')){
        fillForest.classList.add('fillColor')
        volumeForest.classList.add('inputColor')
        volumeForest.classList.add('inputColorBall')
    }
    
    if(buttonRain.classList.contains('bgCard')){
        fillRain.classList.add('fillColor')
        volumeRain.classList.add('inputColor')
        volumeRain.classList.add('inputColorBall')
    }
    
    if(buttonCoffeeShop.classList.contains('bgCard')){
        fillCoffeeShop.classList.add('fillColor')
        volumeCoffeeShop.classList.add('inputColor')
        volumeCoffeeShop.classList.add('inputColorBall')
    }
    
    if(buttonFire.classList.contains('bgCard')){
        fillFire.classList.add('fillColor')
        volumeFire.classList.add('inputColor')
        volumeFire.classList.add('inputColorBall')
    }
})