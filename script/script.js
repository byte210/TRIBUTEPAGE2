const menuHide = () => {
    const sideMenu = document.querySelector('.navigation-mobile-container');

    sideMenu.style.position = "absolute";
    sideMenu.style.top = "0px";
    sideMenu.style.left = "-700px";
}

const menuShow = () => {
    const sideMenu = document.querySelector('.navigation-mobile-container');

    console.log('should show smth now');
    sideMenu.style.position = "absolute";
    sideMenu.style.top = "0px";
    sideMenu.style.left = "0px";
}