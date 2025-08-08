let PrintButton1 = new Image();
let PrintButton2 = new Image();
let logo1 = new Image();
let logo2 = new Image();

if (document.images) {
	PrintButton1.src = "Images/Print1.jpg";
	PrintButton2.src = "Images/Print2.jpg";
	logo1.src = "Images/Logo.png";
	logo2.src = "Images/Logo2.jpg";
}

const imgArray = [
	'Chef4Lg.jpg',
	'EatingLarge.jpg',
	'tablesetLg.jpg',
	'WineGlassLg.jpg'
];

const titleArray = [
	'Chef',
	'Eating',
	'Tableset',
	'Wine Glass'
];

const imgPath = "Images/Fullsize/";

function swapImage(imgID) {
	const theImage = document.getElementById('theImage');
	const textDiv = document.getElementById('bottomText');

	theImage.src = imgPath + imgArray[imgID];
	textDiv.textContent = titleArray[imgID];
}

function preloadImages() {
	for (let i = 0; i < imgArray.length; i++) {
		const tmpImg = new Image();
		tmpImg.src = imgPath + imgArray[i];
	}
}