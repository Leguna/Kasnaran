import { createRestaurantCardTemplate } from '../../templates/template-creator'

class FavoriteRestaurantListView {
  getTemplate () {
    return `
        <div id="content" class="content" tabindex="0">
          <h1 tabindex="0" class="posts__header">Liked Restaurant</h1>
          <div class="posts">
          </div>
        </div>
    `
  }

  showRestaurants (restaurants) {
    this.showFavoriteRestaurants(restaurants)
  }

  showFavoriteRestaurants (restaurants = []) {
    let html
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantCardTemplate(restaurant)), '')
    } else {
      html = this._getEmptyRestaurantTemplate()
    }

    document.querySelector('.posts').innerHTML = html

    document.querySelector('.posts').dispatchEvent(new Event('restaurants:updated'))
  }

  _getEmptyRestaurantTemplate () {
    document.querySelector('.posts__header').innerHTML = 'There is no favorite restaurant'
    return ''
  }
}

export default FavoriteRestaurantListView
