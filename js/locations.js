printLocations = () => {
	mainContainer.innerHTML = '';
	getLocations().then((response) => {
		console.log(response);
		let locationCards = formatLocationCards(response);
		mainContainer.innerHTML = `
		<h3 class = "section-header">LOCATION FINDER</h3>
		<input class="section-search" type="text" placeholder="Search..">
		<section class="section">
                ${locationCards}
        </section>
        `;

		//addEventsToLocationLinks(response);
	});
};

//async function - call Location list.

const formatLocationCards = (locations) => {
	let locationTemplate = locations
		.map((location) => {
			return `
            <div class="card">
                <p class="card__location-title">${location.name}</p>
                
				<div class="card__container">

                    <div class="card__container__box">
                        <h6 class="card__container__box--title">Type</h6>
                        <p class="card__container__box--info">${location.type}</p>
                    </div>    

					<div class="card__container__row">

					</div>

					<div class="card__container__box">
                        <h6 class="card__container__box--title">Dimension</h6>
                        <p class="card__container__box--info">${location.dimension}</p>
                	</div> 

                </div>
                
				<a class="card__link" href="#">+ More Details</a>
            
			</div>
    `;
		})
		.join('');

	return locationTemplate;
};

const getLocations = async () => {
	let url = URL_BASE + '/location/';
	let response = await fetch(url);
	let data = await response.json();
	data = mapDataLocations(data.results);
	return data;
};

const mapDataLocations = (data) => {
	let dataMapped = data.map((location) => {
		let object = {
			name: location.name,
			type: location.type,
			dimension: location.dimension,
		};

		return object;
	});

	return dataMapped;
};
