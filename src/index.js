import './css/style.css';
import './scss/style.scss';
import {
	createItem
} from './js/createItem.js';
import {
	items
} from './js/items.js';

const createGalleryList = (items) => {
	const galleryElement = document.querySelector('.gallery__list');

	items.forEach((item) => {
		galleryElement.appendChild(createItem(item));
	})
}

createGalleryList(items);