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
let main = document.getElementById('main');

let showMobileNav = function() {
	if (mobileNav.style.display == "block") {
		mobileNav.style.display = "none";
	} else {
		mobileNav.style.display = "block";
	}
}

menuIcon.onclick = showMobileNav;
menuItems[0].onclick = showMobileNav;
menuItems[1].onclick = showMobileNav;
menuItems[2].onclick = showMobileNav;
menuItems[3].onclick = showMobileNav;

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