import './style.css'
import burgerOneImg from './asset/burgerimg/burgerOne.jpg'
import burgerTwoImg from './asset/burgerimg/burgerTwo.jpg'

function homepageComponent () {
    const content = document.createElement('div')
    content.classList.add('contentSection')

    document.body.appendChild(content)


    const header = document.createElement('div')
    const title = document.createElement('h1');
    const subTitle = document.createElement('h3')
    title.textContent = 'Big Brian\'s'
    subTitle.textContent = 'Burger Joint'
    header.classList.add('headerImage')
    header.append(title, subTitle)
    content.appendChild(header)

    const nav = document.createElement('div')
    nav.classList.add('nav')
    content.appendChild(nav)
    const ul = document.createElement('ul')
    nav.appendChild(ul)

    const liOne = document.createElement('li')
    const liTwo = document.createElement('li')
    const liThree = document.createElement('li')

    liOne.textContent = 'Home';
    liTwo.textContent = 'Menu';
    liThree.textContent ='Contact';
    ul.append(liOne, liTwo, liThree)


    const info = document.createElement('div');
    info.classList.add('info');

    const intro =  document.createElement('p');
    intro.textContent = 'Welcome to Big Brian\'s burger joint, please take a look at our tasty menu options or head to our contact page to make a reservation'
    info.append(intro);


    const burgerImgDiv = document.createElement('div');
    const burgerOne = new Image()
    const burgerTwo = new Image ()

    burgerOne.classList.add('burgerImgs')
    burgerTwo.classList.add('burgerImgs')

    burgerOne.src = burgerOneImg
    burgerTwo.src = burgerTwoImg
    burgerImgDiv.append(burgerOne, burgerTwo)
    info.append(burgerImgDiv)

    content.append(info)

}

homepageComponent()