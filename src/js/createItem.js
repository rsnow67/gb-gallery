const createImageCard = (item) => {
	const img = document.createElement('img');

	img.classList.add('gallery-card__image');
	img.setAttribute('src', item.src);
	img.setAttribute('alt', `card-${item.id}`);
	img.setAttribute('width', item.width);
	img.setAttribute('height', item.height);

	return img;
}

const createAudioCard = (item) => {
	const inner = document.createElement('div');
	const audio = document.createElement('audio');

	inner.classList.add('gallery-card__inner');
	audio.classList.add('gallery-card__audio');
	audio.setAttribute('src', item.src);
	audio.setAttribute('controls', true);
	inner.appendChild(audio);

	return inner;
}

const createVideoCard = (item) => {
	const video = document.createElement('video');

	video.classList.add('gallery-card__video');
	video.setAttribute('src', item.src);
	video.setAttribute('width', item.width);
	video.setAttribute('height', item.height);
	video.setAttribute('controls', true);

	return video;
}

const DATA_TYPES = {
	image: createImageCard,
	audio: createAudioCard,
	video: createVideoCard
}

export const createItem = (item) => {
	const itemElem = document.createElement('li');

	itemElem.classList.add('gallery__item');
	itemElem.classList.add('gallery-card');

	const cardCreater = DATA_TYPES[item.type];
	itemElem.appendChild(cardCreater(item));

	const title = document.createElement('h3');

	title.classList.add('gallery-card__title');
	title.textContent = item.name;
	itemElem.appendChild(title);

	return itemElem;
}