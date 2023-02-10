const mapOptions = (options, option) => {
	let optionFormated = [];

	options.forEach((element, i) => {
		const stringParts = element.split('/');
		let idOption = stringParts[stringParts.length - 2];
		let auxObject = {
			urlImg: 'assets/images/' + option + '/' + idOption + '.jpg',
			urlFetch: element,
		};
		optionFormated.push(auxObject);
	});
	return optionFormated;
};
