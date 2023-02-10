printSeasons = () => {
	mainContainer.innerHTML = '';
	getSeasons().then((response) => {
		console.log(response);
		let episodeCards = formatEpisodeCards(response);
		mainContainer.innerHTML = `
		
		<section class="section">
		<h3 class = "section__header">EPISODES</h3>
			<section class="section__container">
			
			<div class="card">
					<p class="card__season-title">Season 1</p>
				
				<div class="card__date-container">
					<h6 class="card__date-container--title">DATE</h6>
					<p class="card__date-container--date">December 2, 2013 - April 14, 2014</p>
				</div>
				<div class="card__episode-container">
				<h6 class="card__episode-container--title">EPISODES</h6>
                ${episodeCards}
				</div>
			</div>
			<div class="card">
					<p class="card__season-title">Season 2</p>
				
				<div class="card__date-container">
					<h6 class="card__date-container--title">DATE</h6>
					<p class="card__date-container--date">July 26, 2015 - October 4, 2015</p>
				</div>
				<div class="card__episode-container">
				<h6 class="card__episode-container--title">EPISODES</h6>
                ${episodeCards}
				</div>
			</div>
			<div class="card">
					<p class="card__season-title">Season 3</p>
				
				<div class="card__date-container">
					<h6 class="card__date-container--title">DATE</h6>
					<p class="card__date-container--date">April 1, 2017 - July 30, 201</p>
				</div>
				<div class="card__episode-container">
				<h6 class="card__episode-container--title">EPISODES</h6>
                ${episodeCards}
				</div>
			</div>
			</section>
        </section>
        `;

		//addEventsToLocationLinks(response);
	});
};

//async function - call Location list.

const formatEpisodeCards = (episodes) => {
	let episodeTemplate = episodes
		.map((episode) => {
			return `
				<p class="card__episode-container--ep">${episode.name}</p> 
    `;
		})
		.join('');

	return episodeTemplate;
};

const getSeasons = async () => {
	let url = URL_BASE + '/episode/';
	let response = await fetch(url);
	let data = await response.json();
	data = mapDataEpisodes(data.results);
	return data;
};

const mapDataEpisodes = (data) => {
	let dataMapped = data.map((episode) => {
		let object = {
			date: episode.air_date,
			name: episode.name,
		};

		return object;
	});

	return dataMapped;
};
