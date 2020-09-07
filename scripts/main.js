
// document.querySelector('html').onclick = function () {
//     alert('Ouch! Stop poking me!');
// }


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/GSU.png') {
        myImage.setAttribute('src', 'images/southern-not-state.jpg');
    } else {
        myImage.setAttribute('src', 'images/GSU.png');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Welcome, ' + myName;
    }
}


myButton.onclick = function () {
    setUserName();
}
