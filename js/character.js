const printDetailCharacter = (url) => {
	getCharacters(url).then((response) => {
		console.log(response);
		let characterDetail = formatCharacterDetail(response);
		mainContainer.innerHTML = `
        <h3 class = "section-header">CHARACTER DETAIL</h3>        
		<section class="section">
                ${characterDetail}
        </section>
        `;

		addEventListenerToOptions('characters', response.characters);
		addEventListenerToOptions('characters', response.characters);
		addEventListenerToOptions('characters', response.characters);
		addEventListenerToOptions('characters', response.characters);
	});
};

const getCharacter = async (url) => {
	let response = await fetch(url);
	let data = await response.json();
	data = formatDataCharacter(data);
};

const formatDataCharacter = (data) => {
	let dataFormated = {
		image:
			'assets/images/characters/' +
			data.url
				.replace('https://rickandmortyapi.com/api/character/avatar/', '')
				.replace('/', '') +
			'.jpg',
		name: data.name.toUpperCase(),
		status: data.status,
		species: data.species,
		origin: data.origin,
		location: data.location,
		episode: data.episode,
	};

	return dataFormated;
};
