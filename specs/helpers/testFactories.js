import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter'
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-db'

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('.likeContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant
  })
}

export { createLikeButtonPresenterWithRestaurant }
