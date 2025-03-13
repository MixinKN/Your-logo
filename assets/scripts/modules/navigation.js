export function initNavigation() {

    function openMenu() {
        document.querySelector('.header__row-right').classList.add('header__row-right--is-open')

    }

    function closeMenu() {
        document.querySelector('.header__row-right').classList.remove('header__row-right--is-open')

    }

    function setHandleMenuCallbacks() {
        document.querySelector('.header__menu-burger').onclick = openMenu;
        document.querySelector('.header__menu-close').onclick = closeMenu;

    }

    setHandleMenuCallbacks()
}