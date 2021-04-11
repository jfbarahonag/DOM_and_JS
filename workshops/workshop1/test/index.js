
const myButton = document.querySelector('.my-button');

const counter = document.querySelector('.tick-counter');
counter.value = 0;

function increment() {
    setInterval( () => counter.value++, 1000);
}

myButton.onclick = () => {
    changeImage();
    increment();
    myButton.disabled = true;
    myButton.textContent = 'Revert image'
    alert('Tick started')
}

let changeImage = () => {
    const myImage = document.querySelector('.my-image');
    fetch('https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg')
	    .then(res => res.blob())
	    .then(res => {
	    	const objectURL = URL.createObjectURL(res);
	    	myImage.src = objectURL;
});
}





