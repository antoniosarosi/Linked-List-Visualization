document.addEventListener('DOMContentLoaded', () => {

    // Side Menu

    let settingsBtn = document.getElementById('settings-menu');
    let closeSettings = document.getElementById('close-menu');
    let settingsDiv = document.getElementById('settings');

    let menuTimeout = 800;

    function manageOpacity() {
        let main = document.querySelector('main');
        let header = document.querySelector('header');

        let lowOpacity = 0.5;

        let decreaseOpacity = `decreaseOpacity ${menuTimeout / 1000}s ease`;
        let increaseOpacity = `increaseOpacity ${menuTimeout / 1000}s ease`;

        if (main.style.opacity === "1" || main.style.opacity === "") {
            main.style.animation = decreaseOpacity;
            header.style.animation = decreaseOpacity;
            main.style.opacity = lowOpacity;
            header.style.opacity = lowOpacity;
        }
        else {
            main.style.animation = increaseOpacity;
            header.style.animation = increaseOpacity;
            main.style.opacity = 1;
            header.style.opacity = 1;
        }

    }

    settingsBtn.addEventListener('click', () => {        
        settingsDiv.style.display = 'block';
        settingsDiv.style.animation = `slideMenuOn ${menuTimeout / 1000}s ease`; 
        manageOpacity();
    });

    closeSettings.addEventListener('click', () => {
        settingsDiv.style.animation = `slideMenuOff ${menuTimeout / 1000}s ease`;
        manageOpacity();
        setTimeout(() => {
            settingsDiv.style.display = 'none';
        }, menuTimeout);
    });

    // Code to manage inputs within menu

    


});