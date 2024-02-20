function showData(foods) {
    foods.forEach(food => {
        console.log(`Criando o ${food.name}`)
        card = document.createElement('div')
        img = document.createElement('img')
        foodName = document.createElement('h3')
        price = document.createElement('h4')

        card.classList.add("food-card")
        img.classList.add("food-img")
        foodName.classList.add("food-name")
        price.classList.add("food-price")

        foodName.innerText  = food.name
        img.src = food.image
        price.innerText  = "R$" + food.price

        card.appendChild(img)
        card.appendChild(foodName)
        card.appendChild(price)

        document.querySelector('.foods').appendChild(card)
    });
}


async function getAllFoods() {
    foods = []
    try {
        await axios.get('http://localhost:8080/foods').then((response) => {
        response.data.forEach(element => {
            food = {
                name: element.name,
                price: element.price,
                image: element.image,
            }
            foods.push(food)
        });
    })
    } catch (e) {
        console.error("Don't was possible connect with API.")
    }
    showData(foods)
}

window.addEventListener('load', getAllFoods)