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

export default Dog
