const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/hollow-knight.jfif") {
    myImage.setAttribute("src", "images/hollow-knight2.png");
  } else {
    myImage.setAttribute("src", "images/hollow-knight.jfif");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `HK is cool, ${myName}`;
}

myButton.onclick = () => {
        setUserName();
}

