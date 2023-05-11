//блок счётчика товара

window.addEventListener('click', function (event) {

    let counter
    let amount

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        const wrapper = event.target.closest('.counter-wrapper')
        const card = event.target.closest('.card')
        amount = card.querySelector('[data-items-in-box]')
        counter = wrapper.querySelector('[data-counter]')
    }


    if (event.target.dataset.action === 'plus') {
        if (counter.innerText < 20) {
            counter.innerText = ++counter.innerText
            amount.innerText = counter.innerText + ' шт.'
        }
    }

    if (event.target.dataset.action === 'minus'){
        if (counter.innerText > 1)
            counter.innerText = --counter.innerText
            amount.innerText = counter.innerText + ' шт.'
    }
}) 