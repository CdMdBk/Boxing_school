class Navigation {
    constructor(navSelector, activeClass) {
        this.nav = document.querySelector(`.${navSelector}`);
        this.activeClass = activeClass;
    }

    toggleButton(button) {
        document.querySelectorAll(`.${button}`).forEach(element => {
            element.addEventListener('click', () => {
                this.nav.classList.toggle(this.activeClass);
            });
        });
    }

    hide() {
        this.nav.classList.remove(this.activeClass);
    }

    resizeWindow() {
        window.addEventListener('resize', () => {
            if (window.screen.width > 768) this.hide();
        })
    }
}