const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');
const links = document.querySelector('.links');
const getImage = document.querySelector('.image');

const openMenu = () => {
    gsap.to(links, {duration: 1, x: '0%', onComplete: () => {
        links.classList.add('setLinks');
        links.classList.remove('setLinks');
    }});
}

const closeMenu = () => {
    gsap.to(links, {duration: 2, x: '-100%', onComplete: () => {
        links.classList.add('hideLinks');
        links.classList.remove('showLinks');
    }});
}

openButton.addEventListener('click', () => {
    openButton.classList.add('setButton');
    openMenu();
    getImage.classList.remove('setImage');
})

closeButton.addEventListener('click', () => {
    getImage.classList.add('setImage');
    closeMenu();
    openButton.classList.remove('setButton');
})

