// const time = document.getElementById('counter').textContent

var element = document.getElementById("counter");
var isPaused = false;
var time = 0;

// setInterval here = update this function every 1 second
var t = setInterval(function() {
  // if the time is not paused (isPaused is false)
  // increment current Time by 1
    if(!isPaused) {
        time++;
        element.innerText =  time;
    }
}, 1000); // 1000 = 1s

// play() starts the timer
function play(){
    isPaused = false;
}
// when pause() function is called
// pause the timer and save the current time value to targeted Element or Variable
// in this case var = time
function pause(){
    isPaused = true;
}

//click to pause//
var elementPaused = document.getElementById("pause");
console.log(elementPaused.innerHTML)
elementPaused.addEventListener('click',() => isPaused = true)
//click to ++//
var elementPlus= document.getElementById("plus");
console.log(elementPlus.innerHTML)
elementPlus.addEventListener('click',
function() {
time += 1
})
//click to --//
var elementMinus= document.getElementById("minus");
console.log(elementMinus.innerHTML)
elementMinus.addEventListener('click',
function() {
time -= 1
})
var elementHeart= document.getElementById("heart");
console.log(elementHeart.innerHTML)
elementHeart.addEventListener('click',
function() {
var text = `${time} has been liked x times`
console.log (text)
   
document.getElementById('storeHere2').innerHTML = text
})

// var display = document.getElementById('store').innerHTML
// display.innerHTML = text


var elementSub= document.getElementById("comment-form");
elementSub.addEventListener('submit', function(e){
    e.preventDefault()   
    const display = document.getElementById('comment-input').value
    console.log(display)
    document.getElementById('storeHere2').innerHTML= display
    
   })




       
      