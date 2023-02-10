const printDetailCharacter = (url) => {
	getCharacter(url).then((response) => {
		console.log(response);
		let characterDetail = formatCharacterDetail(response);
		mainContainer.innerHTML = `
		<section class="section">
			<h3 class = "section__header">CHARACTER DETAIL</h3>
				<section class="section-container">
					${characterDetail}
				</section>
			</section>
		`;
	});
};

const getCharacter = async (url) => {
	let response = await fetch(url);
	let data = await response.json();
	data = formatDataCharacter(data);

	return data;
};

const formatDataCharacter = (data) => {
	let dataFormatted = {
		image: data.image,
		name: data.name.toUpperCase(),
		status: data.status,
		species: data.species,
		origin: data.origin.name,
		location: data.location.name,
		episode: mapOptions(data.episode, 'episode'),
	};

	return dataFormatted;
};

const formatCharacterDetail = (data) => {
	return `
		<div class="character-container__avatar">	
				<img class="character-container__avatar--img" src="${data.image}" alt="${data.name}">
				<h3 class="character-container__avatar--name">${data.name}</h3>
			</div>
			
			<div class="character-container__details">
					<h6 class="character-container__details--title">STATUS</h6>
					<div class="character-container__status">
						<p class="character-container__status--alive">ALIVE</p>
						<p class="character-container__status--dead">DEAD</p>
						<p class="character-container__status--unknown">UNKNOWN</p>
					</div>
						<h6 class="character-container__details--title">SPECIES</h6>
						<p class="character-container__details--content">${data.species}</p>
						<h6 class="character-container__details--title">ORIGIN</h6>
						<p class="character-container__details--content">${data.origin}</p>
						<h6 class="character-container__details--title">LOCATION</h6>
						<p class="character-container__details--content-location">${data.location}</p>
					
					<h6 class="character-container__details--title">EPISODE</h6>
					<div class="character-container__episode">
						
					</div>
			</div>
			`;
};
