function cartStatus () {
    const cartWrapper = document.querySelector('.cart-wrapper')
    const cartEmpty = document.querySelector('[data-cart-empty]')
    const orderForm = document.querySelector('#order-form')

    if (cartWrapper.children.length > 0){
        //корзина полная
        cartEmpty.classList.add('none')
        orderForm.classList.remove('none')
    } else {
        //корзина пуста
        cartEmpty.classList.remove('none')
        orderForm.classList.add('none')
    }
}