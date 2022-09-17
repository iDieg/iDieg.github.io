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