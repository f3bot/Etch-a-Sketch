const container = document.querySelector('.container')
const button = document.querySelector('.btn')


const getUserInput = () =>{
    let userChoice = prompt("How many rows?")
    while(userChoice > 100){
        userChoice = prompt("1-100")
    }
    return userChoice
}

const randomColor = () =>{

}

const createGrid = (amount) =>{
    for (let i = 0; i < amount; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < amount; j++){
            const size = 400/amount
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.setAttribute("id", "grid-box")
            gridBox.style.height = `${size}px`
            gridBox.style.width = `${size}px`
            gridBox.addEventListener('mouseover' , () =>{
                gridBox.style.backgroundColor = 'black'
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

//add clear button, but first 16x16 grid should still be created

//make the container centered, and make the boxes fit inside the container