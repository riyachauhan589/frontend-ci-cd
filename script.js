function yesClick() {
  document.body.className = "cherry";
  document.getElementById("response").innerHTML =
    "I love you too ❤️😘💋";

  startCherryBlossom();
}

function noClick() {
  document.body.className = "angry";
  document.getElementById("response").innerHTML =
    "Tum bhot kadus ho 😤🐦";

  startAngryBirds();
}

function startCherryBlossom() {
  document.getElementById("animation").innerHTML =
    "🌸 🌸 🌸 🌸 🌸";
}

function startAngryBirds() {
  document.getElementById("animation").innerHTML =
    "🐦 🐦 🐦 🐦 🐦";
}
