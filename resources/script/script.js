const dogFightName = document.getElementById('dogFightName');
const dogFightMK2Name = document.getElementById('dogFightMK2Name');
const portfolioName = document.getElementById('portfolioName');
const portfolioDetails = document.getElementById('portfolioDetails');
const dogFightDetails = document.getElementById('dogFightDetails');
const dogFightMK2Details = document.getElementById('dogFightMK2Details');
const mobileNav = document.getElementById('smallNav');
const menuIcon = document.getElementById('menuIconContainer');
const skillsImage = document.getElementById('skillsImage');
const menuItems = document.getElementsByClassName('menuItem');
const main = document.getElementById('main');

const showMobileNav = function() {
	if (mobileNav.style.display == "block") {
		mobileNav.style.display = "none";
	} else {
		mobileNav.style.display = "block";
	}
}


menuIcon.onclick = showMobileNav;

for (let i = 0; i < menuItems.length; i++) {
	menuItems[i].onclick = showMobileNav;
}

main.onclick = function() {
	if (mobileNav.style.display == "block") {
		mobileNav.style.display = "none";
}
};


const showProjectDetails = (domElement) => {
	if (domElement.style.display == "block") {
		domElement.style.display = "none";
	} else {
		domElement.style.display = "block";
	}
};

dogFightName.addEventListener('click', () => { 
	showProjectDetails(dogFightDetails);
});

dogFightMK2Name.addEventListener('click', () => { 
	showProjectDetails(dogFightMK2Details);
});

portfolioName.addEventListener('click', () => { 
	showProjectDetails(portfolioDetails);
});