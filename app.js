const CARD = document.querySelector(".card");
const CONTAINER = document.querySelector(".container");


const TITLE = document.querySelector(".title");
const DESCRIPTION = document.querySelector(".info h3");
const LOGO = document.querySelector(".logo img");
const SIGNIN = document.querySelector(".signin");
const DOWNLOAD = document.querySelector(".download");

CONTAINER.addEventListener("mousemove", (e) => {
	let AXE_X = (window.innerWidth / 2 - e.pageX) / 25;
	let AXE_Y = (window.innerHeight / 2 - e.pageY) / 25;
	CARD.style.transform = `rotateY(${AXE_X}deg) rotateX(${AXE_Y}deg)`;
});

CONTAINER.addEventListener("mouseenter", (e) => {
	CARD.style.transition = "none";

	LOGO.style.transform = "translateZ(100px) rotateZ(-45deg)";
	TITLE.style.transform = "translateZ(125px)";
	DESCRIPTION.style.transform = "translateZ(100px)";
	SIGNIN.style.transform = "translateZ(50px)";
	DOWNLOAD.style.transform = "translateZ(50px)";

});

CONTAINER.addEventListener("mouseleave", (e) => {
	CARD.style.transition = "all 0.25s ease";
	CARD.style.transform = `rotateY(0deg) rotateX(0deg)`;

	LOGO.style.transform = "translateZ(0px) rotateZ(0deg)";
	TITLE.style.transform = "translateZ(0px)";
	DESCRIPTION.style.transform = "translateZ(0px)";
	SIGNIN.style.transform = "translateZ(0px)";
	DOWNLOAD.style.transform = "translateZ(0px)";

});

function test() {
	alert("TODO : POP UP INSCRIPTION.")
}