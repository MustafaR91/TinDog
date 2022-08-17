import Dog from 'Dog.js'
import dogs from 'data.js'

let nextDogArray = ['Rex', 'Bella', 'Teddy']
function nextDog() {
    const nextDogs = dogs.shift()
    return nextDogs ? new Dog(nextDogs) : {}
}
let dog = nextDog()
let hasBeenSwiped = false

document.getElementById('ico1').addEventListener('click', function() {
    document.getElementById('nope-badge').style.display = 'block'
    hasBeenSwiped = true
    changeDog()
})

document.getElementById('ico2').addEventListener('click', function() {
    document.getElementById('like-badge').style.display = 'block'
    hasBeenSwiped = true
    changeDog()
})

// document.getElementById('replay').addEventListener('click', function() {
//     console.log('clickerz')
// })

function changeDog() {
    if(dogs.length > 0){
    if(hasBeenSwiped){
       setTimeout(() => { 
       dog = nextDog()
       render()
       hasBeenSwiped = false
        }, 1000)
    }} else {
       setTimeout(() => {
           document.getElementById('container').innerHTML = `
           <h1>No more dogs to check out!</h1>
           <img id="replay" class="replay-btn" src="replay.webp">`
           document.getElementById('replay').addEventListener('click', function() {
          location.reload()
})
       }, 1000)
    }
}



function render() {
    document.getElementById('mid-sec').innerHTML = dog.dogHtml()
}

render()
