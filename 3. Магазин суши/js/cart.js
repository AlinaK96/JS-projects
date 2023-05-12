const cartWrapper = document.querySelector('.cart-wrapper')

window.addEventListener('click', function (event) {

    if (event.target.hasAttribute('data-cart')){

        //находим родителя
        const card = event.target.closest('.card')

        //сбор данных
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            amount: card.querySelector('[data-counter]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
        }

        //проверка есть ли данный товар в корзине

        const item = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)
        if (item){
            const counterElement = item.querySelector('[data-counter]')
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.amount)
        } else {
                //товара нет в корзине
            

            const cartItemHTML = `
            <div class="cart-item" data-id="${productInfo.id}">
                <div class="cart-item__top">
                    <div class="cart-item__img">
                        <img src="${productInfo.imgSrc}" alt="Упс.. Что-то пошло не так">
                    </div>
                    <div class="cart-item__desc">
                        <div class="cart-item__title">${productInfo.title}</div>
                        <div class="cart-item__weight">${productInfo.amount} шт. / ${productInfo.weight}</div>

                        <div class="cart-item__details">

                            <div class="items items--small counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter="">${productInfo.amount}</div>
                                <div class="items__control" data-action="plus">+</div>
                            </div>

                            <div class="price">
                                <div class="price__currency">${productInfo.price} </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            `

            //добавляем товар в корзину

            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
        }

        card.querySelector('[data-counter]').innerText = '1'

        cartStatus()

        //пересчёт стоимости при добавлении нового товара
        priceCalculation()
    }
})