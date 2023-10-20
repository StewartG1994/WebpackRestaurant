
import './style.css'
import { eventListeners } from './index.js'
import burgerOne from './asset/burgerImg/burgerOne.jpg'
import burgerTwo from './asset/burgerImg/burgerTwo.jpg'

function item (imageSrc, title, price, appendDiv){
    const menuItemDiv = document.createElement('div')
    const menuImage = new Image()
    menuImage.classList.add('menuImage')
    menuImage.src = imageSrc

    const menuItemInfoDiv = document.createElement('div')
    menuItemDiv.classList.add('menuItemDiv')
    const menuItemTitle = document.createElement('h5')
    const menuItemPrice = document.createElement('p')
    
    menuItemTitle.textContent = title
    menuItemPrice.textContent = price
    menuItemInfoDiv.append(menuItemTitle, menuItemPrice)

    menuItemDiv.append(menuImage, menuItemInfoDiv)

    appendDiv.append(menuItemDiv)
}

function menuComponent (){

    const menuArea = document.querySelector('.info')
    menuArea.innerHTML = '';

    let menuDiv = document.createElement('div')
    menuDiv.classList.add('menuDiv')

    item(burgerOne, 'Cheese Burger', '£9.99', menuDiv)
    item(burgerTwo, 'Cheese Burger', '£9.99', menuDiv)


    menuArea.append(menuDiv)
    eventListeners()
    }

export{menuComponent}  