const mapOptions = (options, option) => {
	let optionFormated = [];

	options.forEach((element, i) => {
		const stringParts = element.split('/');
		let idOption = stringParts[stringParts.length - 1];
		console.log(idOption);
		let auxObject = {
			urlImg:
				'https://rickandmortyapi.com/api/character/avatar/' +
				idOption +
				'.jpeg',

			urlFetch: element,
		};
		optionFormated.push(auxObject);
	});
	return optionFormated;
};

const formatOptions = (option, options) => {
	let htmlStructure = '';
	options.forEach((element) => {
		htmlStructure += `<img class="location-container__box--${option}" src="${element.urlImg}">`;
	});

	htmlStructure = `
            ${htmlStructure}
    `;
	return htmlStructure;
};

const addEventListenerToOptions = (option, options) => {
	let optionLinks = [
		...document.getElementsByClassName(`location-container__box--${options}`),
	];
	optionLinks.forEach((element, i) => {
		element.addEventListener('click', () => {
			printPage(option.toUpperCase(), options[i].urlFetch);
		});
	});
};
