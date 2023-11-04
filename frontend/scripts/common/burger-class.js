class Navigation {
    constructor(navSelector, activeClass) {
        this.nav = document.querySelector(`.${navSelector}`);
        this.activeClass = activeClass;
    }

    click(burger) {
        document.querySelector(`.${burger}`).addEventListener('click', () => {
            this.nav.classList.toggle(this.activeClass);
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

    showElements() {
        console.log(this.nav);
    }
}