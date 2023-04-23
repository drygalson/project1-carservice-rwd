const nav = document.querySelector('.nav-container-menu-mobile')
const navBtn = document.querySelector('.hamburger')
const allNavItems = document.querySelectorAll('.nav-container-menu__link')
const navContact = document.querySelector('.nav-bar-contact')
const navSocial = document.querySelector('.nav-bar-social')
const navInfoBtn = document.querySelector('.nav-bar__down')
const footerYear = document.querySelector('.footer__year')

const handleNavInfo = () => {
	navInfoBtn.classList.toggle('nav-bar__down--active')
	navContact.classList.toggle('nav-bar-contact--active')
	navSocial.classList.toggle('nav-bar-social--active')
}

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	nav.classList.toggle('nav-container-menu-mobile--active')

	allNavItems.forEach(menu__link => {
		menu__link.addEventListener('click', () => {
			nav.classList.remove('nav-container-menu-mobile--active')
			navBtn.classList.remove('is-active')
		})
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
navBtn.addEventListener('click', handleNav)
navInfoBtn.addEventListener('click', handleNavInfo)
