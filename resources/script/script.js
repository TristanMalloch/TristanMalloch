let dogFightName = document.getElementById('dogFightName');
let dogFightMK2Name = document.getElementById('dogFightMK2Name');
let portfolioName = document.getElementById('portfolioName');
let portfolioDetails = document.getElementById('portfolioDetails');
let dogFightDetails = document.getElementById('dogFightDetails');
let dogFightMK2Details = document.getElementById('dogFightMK2Details');
let mobileNav = document.getElementById('smallNav');
let menuIcon = document.getElementById('menuIconContainer');
let skillsImage = document.getElementById('skillsImage');
let menuItems = document.getElementsByClassName('menuItem');

let showMobileNav = function() {
	if (mobileNav.style.display == "block") {
		mobileNav.style.display = "none";
	} else {
		mobileNav.style.display = "block";
	}
};

menuIcon.onclick = showMobileNav;
menuItems[0].onclick = showMobileNav;
menuItems[1].onclick = showMobileNav;
menuItems[2].onclick = showMobileNav;
menuItems[3].onclick = showMobileNav;

let showDogFight = function() {
	if (dogFightDetails.style.display == "block") {
		dogFightDetails.style.display = "none";
	} else {
		dogFightDetails.style.display = "block";
	}
};

dogFightName.onclick = showDogFight;

let showDogFightMK2 = function() {
	if (dogFightMK2Details.style.display == "block") {
		dogFightMK2Details.style.display = "none";
	} else {
		dogFightMK2Details.style.display = "block";
	}
};

dogFightMK2Name.onclick = showDogFightMK2;

let showPortfolio = function() {
	if (portfolioDetails.style.display == "block") {
		portfolioDetails.style.display = "none";
	} else {
		portfolioDetails.style.display = "block";
	}
};

portfolioName.onclick = showPortfolio;

let skillsSize = function() {
	if (skillsImage.style.height == '250px') {
		skillsImage.style.height = '100px';
	} else {
		skillsImage.style.height = '250px';
	}
};

skillsImage.onclick = skillsSize;