class Slider {
    constructor(type, arraySwitchClasses, window, sliderLength, card, arrayCountVisibleCards, arrayBreakpoints) {
        this.type = type;
        switch(this.type) {
            case 'carousel':
                this.leftArrow = document.querySelectorAll(`.${arraySwitchClasses}`)[0];
                this.rightArrow = document.querySelectorAll(`.${arraySwitchClasses}`)[1];
                break;
            case 'switch':
                this.parentSwitch = document.querySelector(`.${arraySwitchClasses[0]}`).parentElement;
                this.switch = this.parentSwitch.innerHTML;
                this.switchClass = arraySwitchClasses[0];

                this.styleActive = arraySwitchClasses[1][0];
                if (this.styleActive === 'parent') {
                    this.parent = arraySwitchClasses[0];

                    this.arraySwitchInactiveElement = document.querySelectorAll(`${this.parent}`);
                    this.classActive = arraySwitchClasses[1][1];
                } else {
                    this.parent = arraySwitchClasses[0];
                    this.childInactive = arraySwitchClasses[1][1];

                    this.arraySwitchInactiveElement = document.querySelectorAll(`.${this.parent} > .${this.childInactive}`);
                    this.classActive = arraySwitchClasses[1][2];
                }

                this.arraySwitches = [];
                this.count = 0;
        }
        this.window = document.querySelector(`.${window}`);
        this.sliderLength = document.querySelector(`.${sliderLength}`);
        this.arrayCard = document.querySelectorAll(`.${card}`);

        this.arrayCountVisibleCards = arrayCountVisibleCards;
        this.arrayBreakpoints = arrayBreakpoints;
    }

    changeSliderSize() {
        switch(this.type) {
            case 'carousel':
                break;
            case 'switch':
                window.addEventListener('resize', () => {
                    this.resizing();
                });
        }
    }

    resizing() {
        switch(this.type) {
            case 'carousel':
                break;
            case 'switch':
                if (window.screen.width > this.arrayBreakpoints[0]) {
                    if (this.count >= Math.ceil(this.arrayCard.length / this.arrayCountVisibleCards[0])) this.count = Math.ceil(this.arrayCard.length / this.arrayCountVisibleCards[0]) - 1;
                    this.addSwitches(this.arrayCountVisibleCards[0]);
                    
                    this.sliderLength.style.width = `${this.arrayCard.length / this.arrayCountVisibleCards[0] * this.window.clientWidth}px`;
                    this.sliderLength.style.transform = `translate(${-this.count * this.window.clientWidth}px, 0)`;
                    
                    this.arrayCard.forEach((card) => {
                        card.style.width = `calc(${this.window.clientWidth / this.arrayCountVisibleCards[0]}px - 20px)`;
                    });
                } else if (window.screen.width <= this.arrayBreakpoints[0] && window.screen.width > this.arrayBreakpoints[1]) {
                    if (this.count >= Math.ceil(this.arrayCard.length / this.arrayCountVisibleCards[1])) this.count = Math.ceil(this.arrayCard.length / this.arrayCountVisibleCards[1]) - 1;
                    this.addSwitches(this.arrayCountVisibleCards[1]);
                    
                    this.sliderLength.style.width = `${this.arrayCard.length / this.arrayCountVisibleCards[1] * this.window.clientWidth}px`;
                    this.sliderLength.style.transform = `translate(${-this.count * this.window.clientWidth}px, 0)`;
                    
                    this.arrayCard.forEach((card) => {
                        card.style.width = `calc(${this.window.clientWidth / this.arrayCountVisibleCards[1]}px - 30px)`;
                    });
                } else {
                    this.addSwitches(this.arrayCountVisibleCards[2]);
                    
                    this.sliderLength.style.width = `${this.arrayCard.length / this.arrayCountVisibleCards[2] * this.window.clientWidth}px`;
                    this.sliderLength.style.transform = `translate(${-this.count * this.window.clientWidth}px, 0)`;
                    
                    this.arrayCard.forEach((card) => {
                        card.style.width = `calc(${this.window.clientWidth / this.arrayCountVisibleCards[2]}px - 40px)`;
                    });
                }
        }
    }

    addSwitches(countVisibleCards) {
        this.arraySwitches = [];
        this.parentSwitch.innerHTML = '';

        for (let iterator = 0; iterator < Math.ceil(this.arrayCard.length / countVisibleCards); iterator++) {
            this.parentSwitch.innerHTML += this.switch;
        }
        for (let iterator = 0; iterator < Math.ceil(this.arrayCard.length / countVisibleCards); iterator++) {
            this.arraySwitches.push(document.querySelectorAll(`.${this.switchClass}`)[iterator]);
        }

        this.changeActiveSwitch();
        this.sliderFlip();
    }

    changeActiveSwitch() {
        if (this.styleActive === 'parent') {
            this.arraySwitchInactiveElement = document.querySelectorAll(`${this.parent}`);
        } else {
            this.arraySwitchInactiveElement = document.querySelectorAll(`.${this.parent} > .${this.childInactive}`);
        }

        this.oneActiveSwitch();
    }

    oneActiveSwitch() {
        this.arraySwitchInactiveElement.forEach((switchInactiveElement) => {
            switchInactiveElement.classList.remove(this.classActive);
        });
        this.arraySwitchInactiveElement[this.count].classList.add(this.classActive);
    }

    sliderFlip() {
        switch(this.type) {
            case 'carousel':
                break;
            case 'switch':
                this.arraySwitches.forEach((switchPoint, index) => {
                    switchPoint.addEventListener('click', () => {
                        this.count = index;
                        this.sliderLength.style.transform = `translate(${-this.count * this.window.clientWidth}px, 0)`;

                        this.oneActiveSwitch();
                    });
                });
        }
    }
}