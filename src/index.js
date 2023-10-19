import './style.css'
import burgerOneImg from './asset/burgerimg/burgerOne.jpg'
import burgerTwoImg from './asset/burgerimg/burgerTwo.jpg'

function eventListeners () {
    let buttonOne = document.querySelector('.BtnOne')
    buttonOne.addEventListener('click', () =>{
        console.log('test')
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

    info.append(intro,welcome)


    const infoDivCard = document.createElement('div')
    const hoursDiv = document.createElement('div')
    const locationDiv = document.createElement('div')




    content.append(info)

}

homepageComponent()
eventListeners()