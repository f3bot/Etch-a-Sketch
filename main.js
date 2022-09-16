const container = document.querySelector('.container')
const button = document.querySelector('.btn')
const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
const black = document.querySelector('.black')
const random = document.querySelector('.random')
const clear = document.querySelector('#clear')
const eraser = document.querySelector('#eraser')

const getUserInput = () =>{
    let userChoice = prompt("How many rows?")
    while(userChoice > 100){
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
            const size = 400/amount
            let choice = 'black'
            red.addEventListener('click' , () =>{   
                choice = 'red'
            })
            blue.addEventListener('click' , () =>{
                choice = 'blue'
            })
            green.addEventListener('click' , () =>{
                choice = 'green'
            })
            black.addEventListener('click', () =>{
                choice = 'black'
            })
            random.addEventListener('click' , () =>{
                choice = randomColor()
            })
            clear.addEventListener('click', () =>{
                gridBox.style.backgroundColor = 'white'
            })
            eraser.addEventListener('click', () =>{
                choice = 'white'
            })
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
