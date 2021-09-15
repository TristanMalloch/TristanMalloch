let dogFightName = document.getElementById('dogFightName');
let dogFightMK2Name = document.getElementById('dogFightMK2Name');
let dogFightDetails = document.getElementById('dogFightDetails');
let dogFightMK2Details = document.getElementById('dogFightMK2Details');
let mobileNav = document.getElementById('smallNav');
let MenuIcon = document.getElementById('MenuIcon');
let skillsImage = document.getElementById('skillsImage');

let showMobileNav = function() {
	if (mobileNav.style.display == "block") {
		mobileNav.style.display = "none";
	} else {
		mobileNav.style.display = "block";
	}
};

MenuIcon.onclick = showMobileNav;

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

let skillsSize = function() {
	if (skillsImage.style.height == '250px') {
		skillsImage.style.height = '100px';
	} else {
		skillsImage.style.height = '250px';
	}
};

skillsImage.onclick = skillsSize;