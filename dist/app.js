const heroData = [
  {
    img: './assets/student.jpg',
    title: 'Study Abroad',
    text: 'We provide student services at home and abroad, as the company provides admission to students who have a desire to study outside Sudan in various countries (India - Russia - Turkey - Ukraine)',
  },
  {
    img: './assets/medical.jpg',
    title: 'Medical Tourism',
    text: 'Anamy provides health care services with several countries, the most important of which are India, Turkey, Russia, and contracting with several hospitals, such as Fortis, Artemis, Apollo,. India is hope of most patients , because of the comfort they find and the superior health care and the recovery rate is very large.',
  },
  {
    img: './assets/forign.jpg',
    title: 'Foreigner Services',
    text: 'Anamy Company provides services for foreigners from different countries, issuance of entry weights, registration in the Department of Foreigners; Affairs, and RP.',
  },
  {
    img: './assets/coffee.jpg',
    title: 'Food industry',
    text: 'HABOBA for the distribution of food products Sudan has many, important and desirable bounties globally and locally from raw materials that we need to transform into a final product such as gumArabic, hibiscus, baobab, wicka,',
  },
  {
    img: './assets/education.jpg',
    title: 'Students Services',
    text: 'We provide student services at home and abroad, as the company provides admission to students who have a desire to study outside Sudan in various countries (India - Russia - Turkey - Ukraine)',
  },
  {
    img: './assets/export.jpg',
    title: 'Import & Export',
    text: 'SOUSA for Import and Export (sousa) is a Tunisian coastal city in North Africa through which we aim to export all Sudanese products to various countries of the world and introduce them in the form of finished',
  },
]

const products = [
  './assets/pic1.jpg',
  './assets/pic2.jpg',
  './assets/pic3.jpg',
  './assets/pic4.jpg',
  './assets/pic5.jpg',
]

const openBtn = document.querySelector('.open_menu_btn')
const closeBtn = document.querySelector('.close')
const menu = document.querySelector('.menu_section')
const hero = document.querySelector('.hero')

let heroIndex = 0
document.addEventListener('DOMContentLoaded', heroChanger)

function heroChanger() {
  if (heroIndex < 0) heroIndex = heroData.length - 1
  if (heroIndex > heroData.length - 1) heroIndex = 0

  const { img, title, text } = heroData[heroIndex]
  hero.innerHTML = `<div class="hero__overlay"></div>
      <img src=${img} class="hero__img" id="hero" alt="hero" />
      <div class="hero__title">
        <h1>Anamy Group</h1>
        <h2>Multi Activities Co.Ltd.</h2>
      </div>
      <div class="hero__text">
        <h2 id="title">${title}</h2>
        <p id="text">
          ${text.slice(
            0,
            75
          )}...<a href="./pages/services.html" class='read_more'>read more</a>
        </p>
      </div>`
  heroIndex++
}

setInterval(heroChanger, 5000)

openBtn.addEventListener('click', () => {
  menu.classList.add('open')
})

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open')
})

document.addEventListener('DOMContentLoaded', displayServices)

function displayServices() {
  const services = document.querySelector('.service__cols')

  services.innerHTML = heroData
    .map((element) => {
      const { img, title } = element

      return ` <div class="col">
          <div class="col__img">
            <img src=${img} alt="service" />
          </div>
          <div class="col__desc">
            <h3>${title}</h3>
            <a href="./pages/services.html"><i class="fas fa-hand-point-right"></i></a>
          </div>
        </div>`
    })
    .join('')
}

let index = 0

document.getElementById('leftBtn').addEventListener('click', () => {
  index--
  if (index < 0) {
    index = products.length - 1
  }
  document.getElementById('product').src = products[index]
})

document.getElementById('rightBtn').addEventListener('click', () => {
  index++
  if (index > products.length - 1) {
    index = 0
  }
  document.getElementById('product').src = products[index]
})

const socialBtn = document.querySelector('.user-btn')
const btns = document.querySelectorAll('.social-btns button')
const titleBtns = document.querySelectorAll('.holder__letter')

socialBtn.addEventListener('click', () => {
  btns.forEach((btn) => {
    btn.classList.toggle('show')
  })

  titleBtns.forEach((btn) => {
    btn.classList.toggle('show')
  })
})
