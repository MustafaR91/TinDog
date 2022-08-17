class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    dogHtml() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        return `
        <img class="dog-img" src="dog-${name.toLowerCase()}.jpg">
        <h3 class="dog-info">${name}, ${age}</h3>
        <h3 class="dog-info1">${bio}</h3>
        <img id="like-badge" class="badge" src="badge-like.png">
        <img id="nope-badge" class="badge" src="badge-nope.png">
        `
    }
}

const dogs = [
    {
        name: "Rex",
        avatar: "dog-rex.jpg",
        age: 25,
        bio: "Art. Literature. Natural wine. Yoga.",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },{
        name: "Bella",
        avatar: "dog-bella.jpg",
        age: 43,
        bio: "Yup, that's my owner. U can meet him if you want",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    {
        name: "Teddy",
        avatar: "dog-teddy.jpg",
        age: 30,
        bio: "How you doin?",
        hasBeenSwiped: false,
        hasBeenLiked: false
    }
]


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
