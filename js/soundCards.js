export default function soundCards({mainContainer, buttonForest, fillForest, volumeForest, soundCardForest, fillRain, buttonRain, volumeRain, soundCardRain, buttonCoffeeShop, fillCoffeeShop, volumeCoffeeShop, soundCardCoffeeShop, buttonFire, fillFire, volumeFire, soundCardFire}) {
    
    function buttonForestCard() {
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
    }

    function buttonRainCard(){
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
    }

    function buttonCoffeeShopCard() {
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
    }
    
    function buttonFireCard() {
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
    }

    return {buttonForestCard, buttonRainCard, buttonCoffeeShopCard, buttonFireCard}
}