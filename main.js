const container = document.querySelector('.container')
const button = document.querySelector('.btn')
const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
const black = document.querySelector('.black')
const random = document.querySelector('.random')
const clear = document.querySelector('#clear')
const eraser = document.querySelector('#eraser')
const color = document.querySelector('.color')
let choice = 'black'

const getUserInput = () =>{
    let userChoice = prompt("How many rows?")
    while(userChoice > 100 || userChoice == null){
        userChoice = prompt("1-100")
    }
    return userChoice
}

const randomColor = () =>{
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


const createGrid = (amount) =>{
    for (let i = 0; i < amount; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < amount; j++){
            clear.addEventListener('click', () =>{
                gridBox.style.backgroundColor = 'white'
            })
            const size = 400/amount
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.setAttribute("id", "grid-box")
            gridBox.style.height = `${size}px`
            gridBox.style.width = `${size}px`
            gridBox.addEventListener('mouseover' , () =>{
                gridBox.style.backgroundColor = choice
            })
            row.appendChild(gridBox)
        }
        container.appendChild(row)
    }
}

createGrid(16)


button.addEventListener('click', () =>{
    container.innerHTML = ''
    createGrid(getUserInput())
})

random.addEventListener('click' , () =>{
    choice = randomColor()
})
eraser.addEventListener('click', () =>{
    choice = 'white'
})

color.addEventListener('input', (e) =>{
    choice = (e.target.value)
})