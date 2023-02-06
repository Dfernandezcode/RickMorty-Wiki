const printHome = () => {
	mainContainer.innerHTML = `
	<section class="section-home">
        <p class="section-home__description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
		
		<div class="section-home__line"></div>
		
		<nav class="nav">
			<a href="#" class="nav__link">CHARACTERS</a>
			<a href="#" class="nav__link">SEASONS</a>
			<a href="#" class="nav__link">LOCATION</a>
		</nav>
    `;

	addEventsToHomeLinks();
};

const addEventsToHomeLinks = () => {
	const homeLinks = [...document.getElementsByClassName('nav__link')];
	homeLinks.forEach((element) => {
		element.addEventListener('click', () => {
			printPage(element.textContent.toLocaleUpperCase());
			console.log('clicked ' + element.textContent);
		});
	});
	console.log(homeLinks);
};
