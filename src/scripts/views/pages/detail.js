import UrlParser from '../../routes/url-parser'

import RestaurantDbSource from '../../data/restaurant-source'
import { createRestaurantDetailTemplate } from '../templates/template-creator'

import LikeButtonInitiator from '../../utils/like-button-presenter'
import FavoriteRestaurantDB from '../../data/favorite-restaurant-db'

const Detail = {
  async render () {
    return `
      <div id="content" class="restaurant" tabindex="0"></div>
    `
  },

  async afterRender () {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera

    const url = UrlParser.parseActiveUrlWithoutCombiner()

    const restaurant = await RestaurantDbSource.detailRestaurant(url.id).then(value => value.restaurant)

    const restaurantContainer = document.querySelector('.restaurant')
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.likeContainer'),
      favoriteRestaurants: FavoriteRestaurantDB,
      restaurant: restaurant
    })

    document.querySelector('.reviewButtonSubmit').addEventListener('click', async () => {
      const inputNama = document.querySelector('#review-input').value
      const inputReview = document.querySelector('#review-textarea').value

      const review = { id: restaurant.id, name: inputNama, review: inputReview }
      // console.log(review)
      await RestaurantDbSource.addNewReview(review).then(async (value) => {
        if (!value.error) {
          const url = UrlParser.parseActiveUrlWithoutCombiner()
          const restaurant = await RestaurantDbSource.detailRestaurant(url.id).then(value => value.restaurant)

          const restaurantContainer = document.querySelector('.restaurant')
          restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant)

          location.reload()
        }
      })
    })
  }
}

export default Detail
