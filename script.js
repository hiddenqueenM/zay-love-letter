function nextPage(pageNumber) {
  document.querySelector(".active").classList.remove("active");

  document
    .getElementById("page" + pageNumber)
    .classList.add("active");
}


function answerYes() {
  document.getElementById("response").textContent =
    "Yayyyyyyyy I love you sooooo much💋💋💋💋";

  createConfetti();
}


function createConfetti() {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.innerHTML = "🎉";

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration =
      Math.random() * 3 + 2 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}



const poemText = `The best thing that has ever happened to me is knowing you.
You have been there for me when no one else could even stand to be around me.
I once told you that us breaking up was not a forever thing, and I meant it.
I want to plan out a future with you and build it together.

I want to stay together even when things get tough.

I love you so much, and I want to be with you. 💋 💜`;

let index = 0;

function typePoem() {
  if (index < poemText.length) {
    document.getElementById("poem").innerHTML += poemText.charAt(index);
    index++;
    setTimeout(typePoem, 50);
  }
}

typePoem();


// Floating hearts
function createHeart() {
  const heart = document.createElement("div");

  heart.classList.add("heart");
  heart.innerHTML = "🖤❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 5 + 5 + "s";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 500);
function previousPage(pageNumber) {
  document.querySelector(".active").classList.remove("active");

  document
    .getElementById("page" + pageNumber)
    .classList.add("active");
}