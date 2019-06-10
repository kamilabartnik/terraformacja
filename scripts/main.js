let myImagine = document.querySelector('img');
let myHeading = document.querySelector('h1');

myImagine.onclick = function() {
    let mySrc = myImagine.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        myImagine.setAttribute('src', 'images/cat.png');
        myHeading.textContent = 'Mozilla is cool';
    } else {
        myImagine.setAttribute('src', 'images/firefox-icon.png');
        myHeading.textContent = 'Mozilla is not cool';
    }
}