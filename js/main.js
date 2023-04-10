(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	button.addEventListener("click", hamburgerMenu, false);		
})();


// Get the image element
const image = document.getElementById("person1");
const image2 = document.getElementById("person2");
const image3 = document.getElementById("person3");

// Get the information element
const info = document.getElementById("person1-info");
const info2 = document.getElementById("person2-info");
const info3 = document.getElementById("person3-info");


// Add a click event listener to the image
image.addEventListener("click", function() {
  info.style.display = "block";
});

image2.addEventListener("click", function() {
	info2.style.display = "block";
  });

image3.addEventListener("click", function() {
info3.style.display = "block";
});
  

// Add a click event listener to the popup image
const popupImage = info.querySelector(".team-people");
popupImage.addEventListener("click", function() {
  // Hide the information element
  info.style.display = "none";
});

const popupImage2 = info2.querySelector(".team-people");
popupImage2.addEventListener("click", function() {
  info2.style.display = "none";
});

const popupImage3 = info3.querySelector(".team-people");
popupImage3.addEventListener("click", function() {
  info3.style.display = "none";
});

const video = document.getElementById('promo-video');

video.addEventListener('click', function(){
  if(video.paused) {
	video.play();
  } else {
	video.pause();
  }
  });
