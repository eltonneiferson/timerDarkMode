export default function darkModeConfig({mainContainer, buttonDarkMode, buttonLightMode, buttonForest, buttonRain, buttonCoffeeShop, buttonFire, fillForest, fillRain, fillCoffeeShop, fillFire, volumeForest, volumeRain, volumeCoffeeShop, volumeFire}) {

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

function changeBackgroundLight(){
    buttonForest.classList.replace( 'bgCardDarkModeClick', 'bgCard')
    buttonRain.classList.replace( 'bgCardDarkModeClick', 'bgCard')
    buttonCoffeeShop.classList.replace( 'bgCardDarkModeClick', 'bgCard')
    buttonFire.classList.replace( 'bgCardDarkModeClick', 'bgCard')
}

function changeBackgroundDark(){
    buttonForest.classList.replace('bgCard', 'bgCardDarkModeClick')
    buttonRain.classList.replace('bgCard', 'bgCardDarkModeClick')
    buttonCoffeeShop.classList.replace('bgCard', 'bgCardDarkModeClick')
    buttonFire.classList.replace('bgCard', 'bgCardDarkModeClick')
}

function changeInputColorCard() {
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
}

return {controlsDarkMode, addColorsCardDarkMode, removeColorsCardDarkMode, addColorsInput, changeBackgroundLight, changeBackgroundDark, changeInputColorCard}

}