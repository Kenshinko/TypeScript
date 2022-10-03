import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

const initialDate = new Date();
const currentDateDayShift = initialDate.setDate(initialDate.getDate() + 1);
const arrivalDate = currentDateDayShift;
const departureDate = currentDateDayShift + 2*86400000;

window.addEventListener('DOMContentLoaded', () => {
	renderUserBlock('Wade Warren', '/img/avatar.png', 0)
	renderSearchFormBlock(arrivalDate, departureDate)
	renderSearchStubBlock()
	renderToast(
		{text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
		{name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
	)
})
