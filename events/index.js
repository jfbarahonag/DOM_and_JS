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