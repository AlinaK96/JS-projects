const squareInput = document.querySelector('#square-input')
const squareRange = document.querySelector('#square-range')

const inputs = document.querySelectorAll('input')
const basePrice = 6000
const totalPriceElement = document.querySelector('#total-price')

const renovationType = document.querySelectorAll('input[name="type"]')
const building = document.querySelectorAll('input[name="building"]')
const rooms = document.querySelectorAll('input[name="rooms"]')
const extraOption = document.querySelectorAll('input[name="rooms"]')

const ceiling = document.querySelector('input[name="ceiling"]')
const walls = document.querySelector('input[name="walls"]')
const floor = document.querySelector('input[name="floor"]')


squareRange.addEventListener('input', function() {
    squareInput.value = squareRange.value
})  

squareInput.addEventListener ('input', function(){
    squareRange.value = squareInput.value
})


function calculate(){
    let totalPrice = basePrice * parseInt(squareInput.value)

    for (const radio of renovationType){
        if (radio.checked){
            totalPrice *= parseFloat(radio.value)
            
        }
    }

    for (const build of building){
        if (build.checked){
            totalPrice *= parseFloat(build.value )
        }
    }

    for (const room of rooms){
        if (room.checked){
            totalPrice *= parseFloat(room.value)
        }
    }

    if (ceiling.checked){
        totalPrice *= parseFloat(ceiling.value)
    }

    if (walls.checked){
        totalPrice *= parseFloat(walls.value)
    }

    if (floor.checked){
        totalPrice *= parseFloat(floor.value)
    }

    const formatter = new Intl.NumberFormat('ru')
    totalPriceElement.innerText = formatter.format(totalPrice)

}

calculate()

for (let input of inputs){
    input.addEventListener('input', function(){
        calculate()
    })
}



