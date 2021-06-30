/* eslint-disable no-new */
import RestaurantDbSource from '../../data/favorite-restaurant-db'
import FavoriteRestaurantListView from './liked-restaurants/favorite-restaurant-list-view'
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter'

const view = new FavoriteRestaurantListView()

const ListRestaurant = {
  async render () {
    return view.getTemplate()
  },

  async afterRender () {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: RestaurantDbSource })
  }
}

export default ListRestaurant
