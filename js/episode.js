const printDetailEpisode = (url) => {
	getEpisode(url).then((response) => {
		console.log(response);
		let episodeDetail = formatEpisodeDetail(response);
		mainContainer.innerHTML = `
		<section class="section">
			<h3 class = "section__header">EPISODE DETAIL</h3>
				<section class="section-container">
					${episodeDetail}
				</section>
			</section>
		`;
	});
};

const getEpisode = async (url) => {
	let response = await fetch(url);
	let data = await response.json();
	data = formatDataEpisode(data);

	return data;
};

const formatDataEpisode = (epData) => {
	let dataFormatted = {
		name: epData.name.toUpperCase(),
		episode: mapEpisode(epData.episode, 'episode'),
		date: epData.air_date,
		url: epData.url,
		characters: epData.characters,
	};

	return dataFormatted;
};
