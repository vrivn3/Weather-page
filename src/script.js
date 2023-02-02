//figure a way to make this into a separate file
//take a nice image and blurr it
// maybe change the background dependiing on the temperature

function changeCity(newCity) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = newCity;
}

function checkTemp() {
  let temp = prompt("What is the current temp?");
  return temp;
}

function isItCold(temp) {
  return temp >= 0;
}

function changeHeading() {
  let name = prompt("Welcome to your weather page. Please enter your name");

  alert(`Thank you ${name}. Now you can change city.`);
  let city = prompt("Which city are you in?");
  let newTemp = checkTemp();

  if (isItCold(newTemp)) {
    changeCity(`😆 <br /> Currently ${newTemp} °C in ${city}`);
  } else {
    changeCity(`🌬 <br /> Currently ${newTemp} °C in ${city}`);
  }
}

let button = document.querySelector("button");
button.addEventListener("click", changeHeading);
