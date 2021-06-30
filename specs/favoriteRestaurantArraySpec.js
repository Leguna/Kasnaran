import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract'

let favoriteRestaurants = []

const FavoriteRestaurantArray = {

  getRestaurant (id) {
    if (!id) {
      return
    }

    return favoriteRestaurants.find((restaurant) => restaurant.id === id)
  },

  getAllRestaurants () {
    return favoriteRestaurants
  },

  putRestaurant (restaurant) {
    if (!Object.prototype.hasOwnProperty.call(restaurant, 'id')) {
      return
    }

    if (this.getRestaurant(restaurant.id)) {
      return
    }

    favoriteRestaurants.push(restaurant)
  },

  deleteRestaurant (id) {
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id)
  }

}

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => (favoriteRestaurants = []))

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray)
})
