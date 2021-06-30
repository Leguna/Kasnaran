import anime from 'animejs/lib/anime.es.js'

class FavoriteRestaurantShowPresenter {
  constructor ({ view, favoriteRestaurants }) {
    this._view = view
    this._favoriteRestaurants = favoriteRestaurants

    this._showFavoriteRestaurants()

    const postItems = document.querySelectorAll('.post-item')

    for (let i = 0; i < postItems.length; i++) {
      const postItem = postItems[i]

      postItem.addEventListener('mouseenter', () => {
        anime({
          targets: postItem,
          scale: 1.05
        })
      })

      postItem.addEventListener('mouseleave', () => {
        anime({
          targets: postItem,
          scale: 1
        })
      })

      postItem.addEventListener('click', () => {
        location.href = `#/detail/${postItem.getAttribute('id')}`
      })
    }
  }

  async _showFavoriteRestaurants () {
    const restaurants = await this._favoriteRestaurants.getAllRestaurants()
    this._displayRestaurants(restaurants)
  }

  _displayRestaurants (restaurants) {
    this._view.showFavoriteRestaurants(restaurants)
  }
}

export default FavoriteRestaurantShowPresenter
