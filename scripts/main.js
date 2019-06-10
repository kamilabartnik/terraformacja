let myImagine = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool ' +myName
}

myImagine.onclick = function() {
    let mySrc = myImagine.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        myImagine.setAttribute('src', 'images/cat.png');
    } else {
        myImagine.setAttribute('src', 'images/firefox-icon.png');
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }