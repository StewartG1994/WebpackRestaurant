
import './style.css'
import { eventListeners } from './index.js'



function contactComponent (){

    const contactArea = document.querySelector('.info')
    contactArea.innerHTML = '';

    let contactDiv = document.createElement('div')
    contactDiv.classList.add('contactDiv')

    let title = document.createElement('h5')
    title.textContent = 'Address'

    let address = document.createElement('p')
    address.textContent = '42 Wallaby Way, Sydney'

    let phoneNumber = document.createElement('p')
    phoneNumber.textContent = '07715074140'

    contactDiv.append(title,address,phoneNumber)
    contactArea.append(contactDiv)

    eventListeners()
    }

export{contactComponent}  