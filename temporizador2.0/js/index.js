import Sound from"./sounds.js"
import TimerSound from "./timerSound.js"
import{
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonFlorest,
    buttonFlorestBlue,
    buttonRain,
    buttonRainBlue,
    buttonCoffee,
    buttonCoffeeBlue,
    buttonFire,
    buttonFireBlue,
    buttonUp,
    buttonDown,
    minutesDisplay,
    secondsDisplay,
    buttonLua,
    buttonSol,
    changeThemme,
    pointDisplay,
} from "./elements.js"

const timer = TimerSound({
    minutesDisplay,
    secondsDisplay,
    buttonFlorest,
    buttonFlorestBlue,
    buttonRain,
    buttonRainBlue,
    buttonCoffee,
    buttonCoffeeBlue,
    buttonFire,
    buttonFireBlue,
})

const sound = Sound()

var volume = document.querySelector('#volume')

volume.addListener('change', function(e) {
    sound.buttonSoundFlorest().Audio.volume = e.currentTarget.value / 100;
})


buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    timer.countdown()
})


buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    timer.hold()
})

buttonStop.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    timer.resetTimer()

})

buttonUp.addEventListener('click', function() {
    timer.UpTimer()
})

buttonDown.addEventListener('click', function() {
    timer.DownTimer()
})

buttonFlorest.addEventListener('click', function() {
    buttonFlorest.classList.add('hide')
    buttonFlorestBlue.classList.remove('hide')
    timer.buttonFlorestOff()
    sound.pressFlorest()
    sound.pressRainBlue()
    sound.pressCoffeeBlue()
    sound.pressFireBlue()
})

buttonFlorestBlue.addEventListener('click', function() {
    buttonFlorestBlue.classList.add('hide')
    buttonFlorest.classList.remove('hide')
    sound.pressFlorestBlue()
})

buttonRain.addEventListener('click', function() {
    buttonRain.classList.add('hide')
    buttonRainBlue.classList.remove('hide')
    timer.buttonRainOff()
    sound.pressRain()
    sound.pressFlorestBlue()
    sound.pressCoffeeBlue()
    sound.pressFireBlue()
})

buttonRainBlue.addEventListener('click', function() {
    buttonRainBlue.classList.add('hide')
    buttonRain.classList.remove('hide')
    sound.pressRainBlue()
})

buttonCoffee.addEventListener('click', function() {
    buttonCoffee.classList.add('hide')
    buttonCoffeeBlue.classList.remove('hide')
    timer.buttonCoffeeOff()
    sound.pressCoffee()
    sound.pressFlorestBlue()
    sound.pressRainBlue()
    sound.pressFireBlue()
})

buttonCoffeeBlue.addEventListener('click', function() {
    buttonCoffeeBlue.classList.add('hide')
    buttonCoffee.classList.remove('hide')
    sound.pressCoffeeBlue()
})

buttonFire.addEventListener('click', function() {
    buttonFire.classList.add('hide')
    buttonFireBlue.classList.remove('hide')
    timer.buttonFireOff()
    sound.pressFire()
    sound.pressFlorestBlue()
    sound.pressRainBlue()
    sound.pressCoffeeBlue()
})

buttonFireBlue.addEventListener('click', function() {
    buttonFireBlue.classList.add('hide')
    buttonFire.classList.remove('hide')
    sound.pressFireBlue()
})

buttonSol.addEventListener('onclick', function() {
    buttonPlay.setAttribute("stroke","blue") 
})

buttonSol.addEventListener('click', function(){
    buttonSol.classList.add('hide')
    buttonLua.classList.remove('hide')
    changeThemme.classList.add('bodyDark')
    minutesDisplay.classList.add('timerDark')
    pointDisplay.classList.add('timerDark')
    secondsDisplay.classList.add('timerDark')
    buttonPlay.classList.remove('controlsWhite')
    buttonPlay.classList.add('controlsDark')
    buttonPause.classList.remove('controlsWhite')
    buttonPause.classList.add('controlsDark')
    buttonStop.classList.remove('controlsWhite')
    buttonStop.classList.add('controlsDark')
    buttonUp.classList.remove('controlsWhite')
    buttonUp.classList.add('controlsDark')
    buttonDown.classList.remove('controlsWhite')
    buttonDown.classList.add('controlsDark')

    buttonFlorest.classList.remove('soundWhite')
    buttonFlorest.classList.add('soundDark')
    buttonRain.classList.remove('soundWhite')
    buttonRain.classList.add('soundDark')
    buttonCoffee.classList.remove('soundWhite')
    buttonCoffee.classList.add('soundDark')
    buttonFire.classList.remove('soundWhite')
    buttonFire.classList.add('soundDark')

    buttonFlorestBlue.classList.remove('soundWhite')
    buttonFlorestBlue.classList.add('soundDark')
    buttonRainBlue.classList.remove('soundWhite')
    buttonRainBlue.classList.add('soundDark')
    buttonCoffeeBlue.classList.remove('soundWhite')
    buttonCoffeeBlue.classList.add('soundDark')
    buttonFireBlue.classList.remove('soundWhite')
    buttonFireBlue.classList.add('soundDark')
})

buttonLua.addEventListener('click', function() {
    buttonLua.classList.add('hide')
    buttonSol.classList.remove('hide')
    changeThemme.classList.remove('bodyDark')
    minutesDisplay.classList.remove('timerDark')
    pointDisplay.classList.remove('timerDark')
    secondsDisplay.classList.remove('timerDark')
    buttonPlay.classList.remove('controlsDark')
    buttonPause.classList.add('controlsWhite')
    buttonPause.classList.remove('controlsDark')
    buttonStop.classList.add('controlsWhite')
    buttonStop.classList.remove('controlsDark')
    buttonUp.classList.add('controlsWhite')
    buttonUp.classList.remove('controlsDark')
    buttonDown.classList.add('controlsWhite')
    buttonDown.classList.remove('controlsDark')

    buttonFlorest.classList.add('soundWhite')
    buttonFlorest.classList.remove('soundDark')
    buttonRain.classList.add('soundWhite')
    buttonRain.classList.remove('soundDark')
    buttonCoffee.classList.add('soundWhite')
    buttonCoffee.classList.remove('soundDark')
    buttonFire.classList.add('soundWhite')
    buttonFire.classList.remove('soundDark')

    buttonFlorestBlue.classList.add('soundWhite')
    buttonFlorestBlue.classList.remove('soundDark')
    buttonRainBlue.classList.add('soundWhite')
    buttonRainBlue.classList.remove('soundDark')
    buttonCoffeeBlue.classList.add('soundWhite')
    buttonCoffeeBlue.classList.remove('soundDark')
    buttonFireBlue.classList.add('soundWhite')
    buttonFireBlue.classList.remove('soundDark')
})