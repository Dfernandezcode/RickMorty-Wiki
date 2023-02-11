const printDetailLocation = (url) => {
	getLocation(url).then((response) => {
		let locationDetail = formatLocationDetail(response);
		mainContainer.innerHTML = `
		<section class="section">
			<h3 class = "section__header">LOCATION DETAIL</h3>
				<section class="section-container">
					${locationDetail}
				</section>
			</section>
		`;
	});
};

const getLocation = async (url) => {
	let response = await fetch(url);
	let data = await response.json();
	data = formatDataLocation(data);

	return data;
};

const formatDataLocation = (data) => {
	let dataFormatted = {
		name: data.name.toUpperCase(),
		type: data.type,
		dimension: data.dimension,
		residents: mapOptions(data.residents, 'residents'),
	};

	return dataFormatted;
};

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

const formatResidents = (option, options) => {
	let htmlStructure = '';
	options.forEach((element) => {
		htmlStructure += `<img class="location-container__box--${option}" src="${element.urlImg}">`;
	});

	htmlStructure = `
            ${htmlStructure}
    `;
	return htmlStructure;
};

const formatLocationDetail = (location) => {
	console.log(location.residents);
	let residents = formatResidents('residents', location.residents);

	return `
		<div class="location-container">	
			<h3 class="location-container--name">${location.name}</h3>
		</div>
			
		<div class="location-container__details">
					<h6 class="location-container__details--title">TYPE</h6>
					<p class="location-container__details--content">${location.type}</p>
					
					<h6 class="location-container__details--title">DIMENSION</h6>
					<p class="location-container__details--content">${location.dimension}</p>
					
					<h6 class="location-container__details--title">RESIDENTS</h6>
					<div class="location-container__box">
						${residents}
					</div>
		</div>
	`;
};
