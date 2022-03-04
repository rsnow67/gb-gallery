import {
	createItem
} from './createItem.js';

export const createList = (items) => {
	const galleryElement = document.querySelector('.gallery__list');

	items.forEach((item) => {
		galleryElement.appendChild(createItem(item));
	})
}