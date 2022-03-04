export const createItem = (item) => {
	const itemElem = document.createElement('li');
	itemElem.classList.add('gallery__item');
	itemElem.classList.add('gallery-card');

	if (item.type === 'image') {
		const img = document.createElement('img');
		img.classList.add('gallery-card__image');
		img.setAttribute('src', item.src);
		img.setAttribute('alt', `card-${item.id}`);
		img.setAttribute('width', item.width);
		img.setAttribute('height', item.height);
		itemElem.appendChild(img);
	}

	if (item.type === 'audio') {
		const inner = document.createElement('div');
		inner.classList.add('gallery-card__inner');
		itemElem.appendChild(inner);

		const audio = document.createElement('audio');
		audio.classList.add('gallery-card__audio');
		audio.setAttribute('src', item.src);
		audio.setAttribute('controls', true);
		inner.appendChild(audio);
	}

	const title = document.createElement('h3');
	title.classList.add('gallery-card__title');
	title.textContent = item.name;
	itemElem.appendChild(title);

	return itemElem;
}