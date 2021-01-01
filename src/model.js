import image from './assets/image.jpg'
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from './classes/blocks'

export const model = [
	new TitleBlock('Конструктор сайтов на чистом JavaScript', {
		tag: 'h1',
		styles: {
			background: 'linear-gradient(to right, #ff0099, #493240)',
			color: 'rgb(155, 180, 196)',
			padding: '1.5rem',
			'text-align': 'center'
		}
	}),
	new ImageBlock(image, {
		styles: {
			padding: '2rem 0',
			display: 'flex',
			'justify-content': 'center'
		},
		imageStyles: {
			width: '500px',
			height: 'auto'
		},
		alt: 'Это картинка'
	}),
	new ColumnsBlock([
		'Крутое приложение на чистом JavaScript, без использования библиотек'
	], {
		styles: {
			background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
			padding: '2rem',
			color: '#fff',
			'font-weight': 'bold',
			'text-align': 'center'
		}
	})
]