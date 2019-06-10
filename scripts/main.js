let myImagine = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Ukulele is cool, ' +myName
}

myImagine.onclick = function() {
    let mySrc = myImagine.getAttribute('src');
    if(mySrc === 'images/uku.jpeg'){
        myImagine.setAttribute('src', 'images/cat.png');
    } else {
        myImagine.setAttribute('src', 'images/uku.jpeg');
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ukulele is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }