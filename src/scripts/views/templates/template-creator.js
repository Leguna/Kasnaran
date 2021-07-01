
import CONFIG from '../../globals/config'

const createRestaurantCardTemplate = (res) => {
  if (res.description === undefined) res.description = '-'
  return `
<article class='post-item' id='${res.id}' tabindex='0'>

    <img width=0 height=0  tabindex='0' aria-label="Gambar" class='post-item__thumbnail lazyload' data-src='${CONFIG.BASE_IMAGE_URL + 'small/' + res.pictureId}'
    alt='Gambar ${res.name}'>

<div class='post-item__content'>
    <p tabindex='0' class='post-item__date'>
      Rating: ${res.rating}
    </p>
    <a href='#/detail/${res.id}' tabindex='0' class='post-item__title'>${res.name}</a>
    <h1 class='post-item__subtitle'><p tabindex='0' href='#'>${res.city}</p></h1>
    <p tabindex='0' class='post-item__description'>${res.description.slice(0, 500) + (res.description.length > 500 ? '...' : '')}</p>
</div>
</article>`
}

const createRestaurantDetailTemplate = (restaurant) => ` 
<div class="detailContainer">
<div class="poster" tabindex="0" aria-label="Detail Restaurant">

    <div class="review" tabindex="0" aria-label="Review">
        <p tabindex="0">
            ${restaurant.rating}<br>
            <i class="fa fa-star${restaurant.rating < 0.6 ? ' white' : ''}"></i>
            <i class="fa fa-star${restaurant.rating < 1.6 ? ' white' : ''}"></i>
            <i class="fa fa-star${restaurant.rating < 2.6 ? ' white' : ''}"></i>
            <i class="fa fa-star${restaurant.rating < 3.6 ? ' white' : ''}"></i>
            <i class="fa fa-star${restaurant.rating < 4.6 ? ' white' : ''}"></i>
        </p>
    </div>
    <div class="gambar">
    <picture>
        <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL + 'small/' + restaurant.pictureId}">
        <source media="(max-width: 1200px)" srcset="${CONFIG.BASE_IMAGE_URL + 'medium/' + restaurant.pictureId}">
        <img src="${CONFIG.BASE_IMAGE_URL + 'large/' + restaurant.pictureId}" alt="Gambar Restaurant ${restaurant.name}" aria-label="Gambar ${restaurant.name}" tabindex="0">
    </picture>

        <div class="likeContainer"></div>
    </div>

    <div class="restaurant__detail">
        <h2 style="padding-bottom: 16px;" tabindex="0" >RESTAURANT DETAILS</h2>
        <h5 class="textTitle" tabindex="0" >Name</h5>
        <h2 class="textMain" tabindex="0" >${restaurant.name}</h2>
        <h5 class="textTitle" tabindex="0" >City, Address</h5>
        <h2 class="textMain" tabindex="0" >${restaurant.city}, ${restaurant.address}</h2>
        <h5 class="textTitle" tabindex="0" >Description</h5>
        <h2 class="textMain" tabindex="0" >${restaurant.description}</h2>
        <h5 class="textTitle" tabindex="0" >Categories</h5>
        <div class="categories" >` +
            restaurant.categories.map((value) => {
              return `<div class="category"  tabindex="0" >${value.name}</div>`
            }).join('') +
            `
        </div>

        <h2 style="padding-top: 1em; padding-bottom: 8px;" tabindex="0" >MENU</h2>
        <h4  tabindex="0" ><i class="fa fa-spoon"></i><i class="fa fa-"></i> FOODS</h4>
        ` + restaurant.menus.foods.map((value) => {
    return `<p id="menuItem"  tabindex="0" >${value.name} <span
                style="margin-left:auto">Rp. ${parseInt(Math.random() * 100)}.000</span></p>`
  }).join('') +
        `

        <h4  tabindex="0" ><i class="fa fa-glass"></i> DRINKS</h4>
        ` + restaurant.menus.drinks.map((value) => {
    return `<p id="menuItem"  tabindex="0" >${value.name} <span
                style="margin-left:auto">Rp. ${parseInt(Math.random() * 100)}.000</span></p>`
  }).join('') +
        `


        <h4  tabindex="0" ><i class="fa fa-users"></i> Review</h4>
        <div class="reviewFormContainer"> <input id="review-input" aria-label="Type your Name"
                class="reviewInputName" placeholder="Type Your Name" type="text">
            <textarea id="review-textarea" aria-label="Type your Review" class="reviewTextArea"
                placeholder="This Restaurant is awesome!"></textarea> <button class="reviewButtonSubmit">Add
                Review</button> </div>
        <div class="reviewUser">
            ${restaurant.customerReviews.reverse().map((value) => {
            return (value.name !== '' && value.name !== undefined)
            ? ` <p class="reviewText"  tabindex="0" >${value.name}: ${value.review}<span
                    style="margin-left: auto; padding-left: 1em;" >${value.date}</span></p>`
            : ''
            }).join('')}
        </div>

    </div>

</div>
</div>
`

const createLikeRestaurantButtonTemplate = () => ` 
<button id="likeButton" class="likeRound" aria-label="Favorite"><i class="fa fa-heart-o"></i></button>
`

const createUnlikeRestaurantButtonTemplate = () => ` 
<button id="likeButton" class="likeRound" aria-label="Unfavorite"><i class="fa fa-heart"></i></button>
`

export {
  createRestaurantCardTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate
}
