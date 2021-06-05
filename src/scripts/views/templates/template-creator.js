
import CONFIG from '../../globals/config'

const createRestaurantCardTemplate = (res) => `
<article class='post-item' id='${res.id}' tabindex='0'>
<img tabindex='0' class='post-item__thumbnail' src='${CONFIG.BASE_IMAGE_URL + res.pictureId}'
    alt='Gambar ${res.name}'>
<div class='post-item__content'>
    <p tabindex='0' class='post-item__date'>
      Rating: ${res.rating}
    </p>
    <h1 class='post-item__title'><p tabindex='0' href='#'>${res.name}</p></h1>
    <h1 class='post-item__subtitle'><p tabindex='0' href='#'>${res.city}</p></h1>
    <p tabindex='0' class='post-item__description'>${res.description.slice(0, 500) + (res.description.length > 500 ? '...' : '')}</p>
</div>
</article>`

const createRestaurantDetailTemplate = (restaurant) => ` 
<div class="detailContainer">
<div class="poster">

    <div class="review">
        <p>
            ${restaurant.rating}<br>
            <i class="fa fa-star${restaurant.rating < 0.6 ? ' white' : ''}"></i>
            <i class="fa fa-star${restaurant.rating < 1.6 ? ' white' : ''}"></i>
            <i class="fa fa-star${restaurant.rating < 2.6 ? ' white' : ''}"></i>
            <i class="fa fa-star${restaurant.rating < 3.6 ? ' white' : ''}"></i>
            <i class="fa fa-star${restaurant.rating < 4.6 ? ' white' : ''}"></i>
        </p>
    </div>
    <div class="gambar">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.title}" alt=" Gambar">

        <div class="likeContainer">
        </div>
    </div>

    <div class="restaurant__detail">
        <h2 style="padding-bottom: 16px;">RESTAURANT DETAILS</h2>
        <h5 class="textTitle">Name</h5>
        <h2 class="textMain">${restaurant.name}</h2>
        <h5 class="textTitle">City, Address</h5>
        <h2 class="textMain">${restaurant.city}, ${restaurant.address}</h2>
        <h5 class="textTitle">Description</h5>
        <h2 class="textMain">${restaurant.description}</h2>
        <h5 class="textTitle">Categories</h5>
        <div class="categories">` +
            restaurant.categories.map((value) => {
              return `<div class="category">${value.name}</div>`
            }).join('') +
            `
        </div>

        <h2 style="padding-top: 1em; padding-bottom: 8px;">MENU</h2>
        <h4><i class="fa fa-spoon"></i><i class="fa fa-"></i> FOODS</h4>
        ` + restaurant.menus.foods.map((value) => {
    return `<p id="menuItem">${value.name} <span
                style="margin-left:auto">Rp. ${parseInt(Math.random() * 100)}.000</span></p>`
  }).join('') +
        `

        <h4><i class="fa fa-glass"></i> DRINKS</h4>
        ` + restaurant.menus.drinks.map((value) => {
    return `<p id="menuItem">${value.name} <span
                style="margin-left:auto">Rp. ${parseInt(Math.random() * 100)}.000</span></p>`
  }).join('') +
        `


        <h4><i class="fa fa-users"></i> Review</h4>
        <div class="reviewFormContainer"> <input id="review-input" aria-label="Type your Name"
                class="reviewInputName" placeholder="Type Your Name" type="text">
            <textarea id="review-textarea" aria-label="Type your Review" class="reviewTextArea"
                placeholder="This Restaurant is awesome!"></textarea> <button class="reviewButtonSubmit">Add
                Review</button> </div>
        <div class="reviewUser">
            ${restaurant.customerReviews.reverse().map((value) => {
            return (value.name !== '' && value.name !== undefined)
            ? ` <p class="reviewText">${value.name}: ${value.review}<span
                    style="margin-left: auto; padding-left: 1em;">${value.date}</span></p>`
            : ''
            }).join('')}
        </div>

    </div>

</div>
</div>
`

const createLikeButtonTemplate = () => ` 
<div id="likeButton" class="likeRound"><i class="fa fa-heart-o"></i></div>
`

const createLikedButtonTemplate = () => ` 
<div id="likeButton" class="likeRound"><i class="fa fa-heart"></i></div>
`

export {
  createRestaurantCardTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
