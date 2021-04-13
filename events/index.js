let username = document.querySelector('.main-form__input #user')
let password = document.querySelector('.main-form__input #pswd')
let submit = document.querySelector('.main-form__input button')

let footer = document.querySelector('.footer')
let div = document.querySelector('.footer-div')
let button = document.querySelector('.footer-div-div')

username.placeholder = 'User'
password.placeholder = 'Pass'

const showAlert = (evt) => {
    console.log(evt);
    if (username.value == '') {
        alert('Please fill username\'s field')
        return
    } 
    else if (password.value == '') {
        alert('Please fill password\'s field')
        return
    }
    alert(`Logging ${username.value}`)
}

submit.addEventListener('click', showAlert)
footer.addEventListener('click', (evt) => console.log(`click ${evt.currentTarget.nodeName}`))
div.addEventListener('click', (evt) => console.log(`click ${evt.currentTarget.nodeName}`))
button.addEventListener('click', (evt) => {
    evt.stopPropagation();
    console.log(`click ${evt.currentTarget.nodeName}`)
    console.log(github);
})

/**
 * 
 * Only works with existing elements in the HTML 
 */
let eventDelegationFunction = (evt) => {
    console.log(evt.target.nodeName);
    if(evt.target.nodeName === 'DIV') {
        window.alert('hello')
    } else if (evt.target.nodeName === 'FOOTER') {
        window.alert('hola')
    } else if (evt.target.nodeName === 'BUTTON') {
        // This wont work due to stop propagation used in Line:29
        window.alert('bonjour')
    } else {
        window.alert('Ni hao')
    }
}

footer.addEventListener('click', eventDelegationFunction)