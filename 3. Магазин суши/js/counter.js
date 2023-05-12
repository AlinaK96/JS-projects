//блок счётчика товара

window.addEventListener('click', function (event) {

    let counter

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        const wrapper = event.target.closest('.counter-wrapper')
        const card = event.target.closest('.card')
        counter = wrapper.querySelector('[data-counter]')
    }


    if (event.target.dataset.action === 'plus') {
        if (counter.innerText < 20) {
            counter.innerText = ++counter.innerText
        }
    }

    if (event.target.dataset.action === 'minus'){

        if (counter.innerText > 1){
            counter.innerText = --counter.innerText
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            event.target.closest('.cart-item').remove()

            cartStatus()

            priceCalculation()
        }
    }

    
        // пересчёт стоимости при изменении количества товара внутри корзины
        if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
            priceCalculation()
        }
}) 