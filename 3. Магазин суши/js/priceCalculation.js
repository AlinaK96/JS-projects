function priceCalculation () {
    const cartItems = document.querySelectorAll('.cart-item')
    const priceShow = document.querySelector('.total-price')

    let totalPrice = 0

    cartItems.forEach(function(item) {

        const amount = item.querySelector('[data-counter]')
        const price = item.querySelector('.price__currency')

        const currentPrice = parseInt(amount.innerText) * parseInt(price.innerText)
        totalPrice += currentPrice
    })

    priceShow.innerText = totalPrice
    
}