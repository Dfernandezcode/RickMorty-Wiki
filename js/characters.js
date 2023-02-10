//API: https://rickandmortyapi.com/api/character

printCharacters = () => {
	getCharacters().then((response) => {
		let characterCards = formatCharacterCards(response);
		mainContainer.innerHTML = `
		<section class="section">
		<h3 class = "section__header">CHARACTER FINDER</h3>
		<input class="section__search" type="text" placeholder="Search...">
			<section class="section__container">
                ${characterCards}
			</section>
        </section>
        `;

		addEventsToCharacterLinks(response);
	});
};

//async function - call character list.

const formatCharacterCards = (characters) => {
	console.log(characters);
	let characterTemplate = characters
		.map((character) => {
			return `
        <div class="card">
            <div class="card__title">
                <h5 class="card__title--name">${character.name}</h5>
                <p class="card__title--status card__title--${character.status}">${character.status}</p>
            </div>
            
            <div class="card__box">
				<img class="card__box--img" src="${character.image}" alt="${character.name}">
                <div class="card__box-info">
                    <h6 class="card__box-info--title">SPECIES</h6>
                    <p class="card__box-info--info">${character.species}</p>
                    <h6 class="card__box-info--title">GENDER</h6>
                    <p class="card__box-info--info">${character.gender}</p>
                    <h6 class="card__box-info--title">ORIGIN</h6>
                    <p class="card__box-info--info">${character.origin.name}</p>
                    <h6 class="card__box-info--title">LOCATION</h6>
                    <p class="card__box-info--info">${character.location.name}</p>
                </div>
        	</div>
			<a class="card__link" href="#">+ More Details</a>
			</div>
            `;
		})
		.join('');

	return characterTemplate;
};

const addEventsToCharacterLinks = (characters) => {
	let cardLinks = [...document.getElementsByClassName('card__link')];
	cardLinks.forEach((element, i) => {
		element.addEventListener('click', () => {
			printPage('CHARACTERS', characters[i].urlDetail);
		});
	});
};

const getCharacters = async () => {
	let url = URL_BASE + '/character/';
	let dataAllChar = [];

	for (let i = 1; i <= 20; i++) {
		let response = await fetch(`${url}?page=${i}`);
		let data = await response.json();
		dataAllChar = [...dataAllChar, ...mapDataCharacters(data.results)];
	}

	return dataAllChar;
};

const mapDataCharacters = (data) => {
	let dataMapped = data.map((character) => {
		let object = {
			id: character.id,
			name: character.name,
			status: character.status,
			image: character.image,
			species: character.species,
			gender: character.gender,
			origin: character.origin,
			location: character.location,
			urlDetail: character.url,
		};

		return object;
	});

	return dataMapped;
};
