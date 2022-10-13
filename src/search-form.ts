import { renderBlock } from './lib.js'

export function renderSearchFormBlock (arrivalDate: number, departureDate: number) {
	const currentDay = new Date(arrivalDate - 86400000).toISOString().split('T')[0];
	const arrivalDay = new Date(arrivalDate).toISOString().split('T')[0];
	const departureDay = new Date(departureDate).toISOString().split('T')[0];

	let limitDate = new Date();
	limitDate = new Date(limitDate.getFullYear(), limitDate.getMonth() + 2, 1);
	const limitDay = limitDate.toISOString().split('T')[0];

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
						<input id="check-in-date" type="date" value="${arrivalDay}" min="${currentDay}" max="${limitDay}" name="checkin" />
					</div>
					<div>
						<label for="check-out-date">Дата выезда</label>
						<input id="check-out-date" type="date" value="${departureDay}" min="${currentDay}" max="${limitDay}" name="checkout" />
					</div>
					<div>
						<label for="max-price">Макс. цена суток</label>
						<input id="max-price" type="text" value="" name="price" class="max-price" />
					</div>
					<div>
						<div><button>Найти</button></div>
					</div>
				</div>
			</fieldset>
		</form>
		`
	)
}
