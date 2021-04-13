let username = document.querySelector('.main-form__input #user')
let password = document.querySelector('.main-form__input #pswd')
let submit = document.querySelector('.main-form__input button')

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