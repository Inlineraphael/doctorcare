window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrrentSection(home)
  activateMenuAtCurrrentSection(services)
  activateMenuAtCurrrentSection(about)
  activateMenuAtCurrrentSection(contact)
}

function activateMenuAtCurrrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  console.log(menuElement)

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  } else {
    menuElement.classList.remove('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    document.querySelector('nav#navigation').classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 1300) {
    backToTopButton.classList.add('show')
  } else {
    document.querySelector('#backToTopButton').classList.remove('show')
  }
}

function openMenu() {
  document.querySelector('body').classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)
