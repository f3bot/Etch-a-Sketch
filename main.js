const container = document.querySelector('.container')
const button = document.querySelector('.btn')

const getUserInput = () =>{
    let userChoice = Math.floor(prompt("How many rows?"))
    return userChoice
}

const createGrid = (amount) =>{
    for (let i = 0; i < amount; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < amount; j++){
            const size = 960/amount
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.height = `${size}px`
            gridBox.style.width = `${size}px`
            row.appendChild(gridBox)
        }
        container.appendChild(row)
    }
}

