import './style.css'

import { menuComponent } from './menu'
import { contactComponent } from './contact'
import timeIcon from './asset/icon/clock.png'
import locationIcon from './asset/icon/location.png'


function eventListeners () {
    let buttonOne = document.querySelector('.BtnOne')
    let buttonTwo = document.querySelector('.BtnTwo')
    let buttonThree = document.querySelector('.BtnThree')

    buttonOne.addEventListener('click', () =>{
        
        document.body.innerHTML = '';
        homepageComponent()
    })

    buttonTwo.addEventListener('click', () =>{
        menuComponent()
    })

    buttonThree.addEventListener('click', ()=>{
        contactComponent()


    })
}

function homepageComponent () {
    const content = document.createElement('div')
    content.classList.add('contentSection')

    document.body.appendChild(content)




    const nav = document.createElement('div')
    nav.classList.add('nav')
    content.appendChild(nav)
    const ul = document.createElement('ul')
    nav.appendChild(ul)

    const liOne = document.createElement('button')
    const liTwo = document.createElement('button')
    const liThree = document.createElement('button')

    liOne.classList.add('BtnOne')
    liTwo.classList.add('BtnTwo')
    liThree.classList.add('BtnThree')

    liOne.textContent = 'Home';
    liTwo.textContent = 'Menu';
    liThree.textContent ='Contact';
    ul.append(liOne, liTwo, liThree)

    


    const info = document.createElement('div');
    info.classList.add('info');

    let intro = document.createElement('h1')
    intro.textContent = 'Welcome to Brian\'s burger bar';

    let welcome = document.createElement('h3')
    welcome.textContent = 'Come on down for delicious affordable food'



    const infoDivCard = document.createElement('div')
    infoDivCard.classList.add('infoDivCard')
    
    const locationDiv = document.createElement('div')
    locationDiv.classList.add('locationDiv')

    const locationPic = new Image ();
    locationPic.src = locationIcon

    let addressDiv = document.createElement('div')

    let addressTitle = document.createElement('h5')
    addressTitle.textContent = 'Address';
    let address  = document.createElement('p');
    address.textContent = '42 Wallaby Way, Sydney'

    addressDiv.append(addressTitle,address)

    locationDiv.append(locationPic, addressDiv)

    const hoursDiv = document.createElement('div')
    hoursDiv.classList.add('hoursDiv');
    const hoursPic = new Image();
    hoursPic.src = timeIcon 


    let timesDiv = document.createElement('div')

    let mondayFri = document.createElement('p');
    let satSun = document.createElement('p');


    mondayFri.textContent = 'Monday - Friday 5pm - 11pm;'
    satSun.textContent = 'Saturday to Sunday 3pm - 11pm' 

    timesDiv.append(mondayFri,satSun)





    hoursDiv.append(hoursPic, timesDiv)





    infoDivCard.append(locationDiv,hoursDiv)



    info.append(intro,welcome, infoDivCard)




    content.append(info)
    eventListeners()

}
export {eventListeners}
homepageComponent()
