import { renderBlock } from './lib.js'

function getFormatedDate (date: Date): string {
	const y = date.getFullYear().toString();
	const m = (date.getMonth() + 1).toString();
	const d = date.getDate().toString();
	
	return `${y}-${m.length == 1 ? `0${m}` : m }-${d.length == 1 ? `0${d}` : d }`;
}

export function renderSearchFormBlock (arrivalDate: number, departureDate: number) {
	const currentDay = new Date(arrivalDate - 86400000);
	const arrivalDay = new Date(arrivalDate);
	const departureDay = new Date(departureDate);

	let limitDate = new Date();
	limitDate = new Date(limitDate.getFullYear(), limitDate.getMonth() + 2, 1);

	const currentDayStr = getFormatedDate(currentDay);
	const arrivalDayStr = getFormatedDate(arrivalDay);
	const departureDayStr = getFormatedDate(departureDay);
	const limitDateStr = getFormatedDate(limitDate);

	renderBlock(
		'search-form-block',
		`
		<form>
			<fieldset class="search-filedset">
				<div class="row">
					<div>
						<label for="city">Город</label>
						<input id="city" type="text" disabled value="Санкт-Петербург" />
						<input type="hidden" disabled value="59.9386,30.3141" />
					</div>
					<!--<div class="providers">
						<label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
						<label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
					</div>--!>
				</div>
				<div class="row">
					<div>
						<label for="check-in-date">Дата заезда</label>
						<input id="check-in-date" type="date" value="${arrivalDayStr}" min="${currentDayStr}" max="${limitDateStr}" name="checkin" />
					</div>
					<div>
						<label for="check-out-date">Дата выезда</label>
						<input id="check-out-date" type="date" value="${departureDayStr}" min="${currentDayStr}" max="${limitDateStr}" name="checkout" />
					</div>
					<div>
						<label for="max-price">Макс. цена суток</label>
						<input id="max-price" type="number" value="" name="price" class="max-price" />
					</div>
					<div>
						<div><button id="search-button">Найти</button></div>
					</div>
				</div>
			</fieldset>
		</form>
		`
	)
}
