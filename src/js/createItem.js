export const createItem = (item) => {
	const itemElem = document.createElement('li');
	itemElem.classList.add('gallery__item');
	itemElem.classList.add('gallery-card');

	const title = document.createElement('h3');
	title.classList.add('gallery-card__title');
	title.textContent = item.name;
	itemElem.appendChild(title);

	const img = document.createElement('img');
	img.classList.add('gallery-card__image');
	img.setAttribute('src', item.image);
	img.setAttribute('alt', `card-${item.id}`);
	img.setAttribute('width', item.width);
	img.setAttribute('height', item.height);
	itemElem.appendChild(img);

	return itemElem;
}