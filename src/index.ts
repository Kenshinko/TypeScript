import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

const initialDate: Date = new Date();
const arrivalDate: number = initialDate.setDate(initialDate.getDate() + 1);
const departureDate: number = arrivalDate + 2*86400000;

interface ISearchFormData {
	arrivalDay: string,
	departureDate: string,
	priceOneNight: string,
}

export interface IUserData {
	userName: string,
	avatarUrl: string,
}

let userData: IUserData = {
	userName: 'Wade Warren',
	avatarUrl: '/img/avatar.png',
}

//Возвращаем данные нашего объекта из localStorage:
function getUserData (): IUserData {
	if (localStorage.getItem('user') === null) {
		const serial_userData: string = JSON.stringify(userData);
		localStorage.setItem('user', serial_userData);
	}

	const return_userData = JSON.parse(localStorage.getItem('user'));
	if (typeof return_userData === 'object') {
		return return_userData;
	} else {
		return userData = {userName: '', avatarUrl: '',};
	}
}

function getFavoritesAmount (): unknown {
	const return_favoritesAmount = localStorage.getItem('favoritesAmount');
	if (return_favoritesAmount === null) {
		localStorage.setItem('favoritesAmount', '2');
	}

	if (typeof return_favoritesAmount === 'string') {
		const favoritesAmountNum = Number.parseInt(return_favoritesAmount);
		if (typeof favoritesAmountNum === 'number') {
			return favoritesAmountNum;
		} else {
			return 0;
		}
	}
}

function searchFormData(searchParams: ISearchFormData): void {
	console.log(searchParams);
}

window.addEventListener('DOMContentLoaded', () => {
	renderUserBlock(getUserData(), getFavoritesAmount())
	renderSearchFormBlock(arrivalDate, departureDate)
	renderSearchStubBlock()
	renderToast(
		{text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
		{name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
	)

//Создаем функцию-обработчик и пробрасываем аргументы в функцию поиска searchFormData:
	const searchbtn = document.getElementById('search-button');
	searchbtn.addEventListener('click', (event) => {
		event.preventDefault();
		const getArrivalDay = document.getElementById('check-in-date').value;
		const getDepartureDate = document.getElementById('check-out-date').value;
		const getPriceOneNight = document.getElementById('max-price').value;

		searchFormData({arrivalDay: getArrivalDay, departureDate: getDepartureDate, priceOneNight: getPriceOneNight})
	}, false);
})
