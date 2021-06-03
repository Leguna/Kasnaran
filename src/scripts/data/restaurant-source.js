import API_ENDPOINT from '../globals/api-endpoint'

class RestaurantDBSource {
  static async listRestaurant () {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    return response.json()
  }

  static async searchRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    return response.json()
  }

  static async addNewReview (id, name, review) {
    const response = await fetch(API_ENDPOINT.DETAIL(id), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345'
      },
      body: `{"id" : ${id}, "name" : ${name}, "review" : ${review} }`
    })
    return response.json()
  }
}

export default RestaurantDBSource
