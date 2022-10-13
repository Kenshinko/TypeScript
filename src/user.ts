import { renderBlock } from './lib.js'
import { IUserData } from './index.js'

export function renderUserBlock (userData: IUserData, favoriteItemsAmount?: unknown) {
	const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
	const hasFavoriteItems = favoriteItemsAmount > 0 ? true : false

	renderBlock(
		'user-block',
		`
		<div class="header-container">
			<img class="avatar" src=${userData.avatarUrl} alt=${userData.userName} />
			<div class="info">
					<p class="name">${userData.userName}</p>
					<p class="fav">
						<i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
					</p>
			</div>
		</div>
		`
	)
}
