import img1 from '../media/img/1.jpg';
import img2 from '../media/img/2.jpg';
import img3 from '../media/img/3.jpg';
import img4 from '../media/img/4.gif';
import audio1 from '../media/audio/1.mp3';
import audio2 from '../media/audio/2.mp3';
import audio3 from '../media/audio/3.mp3';

const imageWidth = 426;
const imageHeight = 240;

export const items = [{
		id: 1,
		type: 'image',
		src: img1,
		name: 'Мельница у реки',
		width: imageWidth,
		height: imageHeight
	},
	{
		id: 2,
		type: 'image',
		src: img2,
		name: 'Горы осенью',
		width: imageWidth,
		height: imageHeight
	},
	{
		id: 3,
		type: 'image',
		src: img3,
		name: 'Деревня летом',
		width: imageWidth,
		height: imageHeight
	},
	{
		id: 4,
		type: 'image',
		src: img4,
		name: 'Анимированный котик',
		width: imageWidth,
		height: imageHeight
	},
	{
		id: 5,
		type: 'audio',
		src: audio1,
		name: 'Восход',
	},
	{
		id: 6,
		type: 'audio',
		src: audio2,
		name: 'Ручей',

	},
	{
		id: 7,
		type: 'audio',
		src: audio3,
		name: 'Вечерние сверчки',
	}
];