export default function timerConfig({minutesDisplay, secondDisplay, timer, endTimer, buttonPlay, buttonPause, buttonPressAudio, soundCardForest, soundCardRain, soundCardCoffeeShop, soundCardFire, buttonForest, buttonRain, buttonCoffeeShop, buttonFire, fillForest, fillRain, fillCoffeeShop, fillFire, volumeForest, volumeRain, volumeCoffeeShop, volumeFire, mainContainer}) {

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
            resetStyleTimer()
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

    function pauseTimer(){
        buttonPressAudio.play()
        clearTimeout(timer)
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    function resetStyleTimer() {
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

    return {updateTimerDisplay, countDown, pauseTimer, resetStyleTimer, removeColorsInput}
}

