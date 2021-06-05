import API_ENDPOINT from '../globals/api-endpoint'

class RestaurantDBSource {
  static async listRestaurant () {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id))
    return response.json()
  }

  static async searchRestaurant (query) {
    const response = await fetch(API_ENDPOINT.SEARCH_RESTAURANT(query))
    return response.json()
  }

  static async addNewReview (review) {
    const response = await fetch(API_ENDPOINT.ADD_NEW_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Auth-Token': '12345'
      },
      body: JSON.stringify(review)
    })
    return response.json()
  }
}

export default RestaurantDBSource
