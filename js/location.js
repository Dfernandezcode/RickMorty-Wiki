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

		addEventListenerToOptions('residents', response.residents);
		console.log(response);
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

const formatLocationDetail = (location) => {
	console.log(location.residents);
	let residents = formatOptions('residents', location.residents);

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
