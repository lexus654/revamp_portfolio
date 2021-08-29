"uses strict;";
//carousel function

console.log(`line-${0}`);

const image1 = "/carousel-1.png";
const image2 = "/carousel-2.jpg";
const image3 = "/carousel-3.jpg";
const line1 = "My hobby is watching anime, My favourite anime is Black Clover";
const line2 =
  "My main sport is playing Badminton, but I can also play basketball and volleyball";
const line3 = "I am proud to be a DOST Scholar";

let gallery = [image1, image2, image3];
let galleryText = [line1, line2, line3];
let index = 0;
const lineActive = document.getElementById(`line-${index}`);
lineActive.classList.toggle("lines--active");
const carousel = document.getElementById("carousel--img");
const carouselText = document.getElementById("carousel--text");

const change = function () {
  index === 2 ? (index = 0) : index++;
  const lineActive = document.getElementById(`line-${index}`);
  carousel.src = gallery[index];
  carouselText.textContent = galleryText[index];
  lineActive.classList.toggle("lines--active");
};

window.onload = function () {
  setInterval(change, 5000);
};
