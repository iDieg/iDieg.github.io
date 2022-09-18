const themeButton = document.getElementById('toggleButton');
const theme = 'dark';
const icon = 'fa-sun'

// Get icon function

const getIcon = () => {
   return themeButton.classList.contains(icon) ? 'fa-sun' : 'fa-moon';
}

// Change theme function
themeButton.addEventListener('click', () => {
    if(getIcon !== 'fa-sun') {
        document.body.classList.toggle(theme);
        themeButton.classList.toggle(icon);
        themeButton.classList.toggle('fa-moon');
    }
})

const themeButtonResponsive = document.getElementById('toggleButton-responsive');
const responsiveDiv = document.querySelector('.responsive-container');
const barsButton = document.getElementById('barsButton');

themeButtonResponsive.addEventListener('click', () => {
    if (getIcon !== 'fa-sun') {
        document.body.classList.toggle(theme);
        themeButtonResponsive.classList.toggle(icon);
        themeButtonResponsive.classList.toggle('fa-moon');
    }
})

barsButton.addEventListener('click', () => {
    responsiveDiv.classList.toggle('display-none')
})

// contact link

const contactIcon = document.querySelector('.contact-icon');

contactIcon.onclick = () => {
    window.open("https://github.com/iDieg", "_blank");
}