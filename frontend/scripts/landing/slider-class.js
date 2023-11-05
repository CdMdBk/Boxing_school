class Slider {
    constructor(type, switchesClass, window, sliderLength, card) {
        this.type = type;
        switch(this.type) {
            case 'carousel':
                this.leftArrow = document.querySelectorAll(`.${switchesClass}`)[0];
                this.rightArrow = document.querySelectorAll(`.${switchesClass}`)[1];
                break;
            case 'switch':
                this.parentSwitch = document.querySelector(`.${switchesClass}`).parentElement;
                this.switch = this.parentSwitch.innerHTML;
                this.switchClass = switchesClass;
                this.arraySwitches = [];
                this.count = 0;
        }
        this.window = document.querySelector(`.${window}`);
        this.sliderLength = document.querySelector(`.${sliderLength}`);
        this.arrayCard = document.querySelectorAll(`.${card}`);
    }

    changeSliderSize(arrayCountVisibleCards, arrayBreakpoints) {
        switch(this.type) {
            case 'carousel':
                break;
            case 'switch':
                window.addEventListener('resize', () => {
                    this.resizing(arrayCountVisibleCards, arrayBreakpoints);
                });
        }

    }

    resizing(arrayCountVisibleCards, arrayBreakpoints) {
        switch(this.type) {
            case 'carousel':
                break;
            case 'switch':
                if (window.screen.width > arrayBreakpoints[0]) {
                    this.sliderLength.style.width = `${this.arrayCard.length / arrayCountVisibleCards[0] * this.window.clientWidth}px`;
                    if (this.count > 0) this.count = 0;
                    this.sliderLength.style.transform = `translate(0, 0)`;
                    this.arrayCard.forEach((card) => {
                        card.style.width = `calc(${this.window.clientWidth / arrayCountVisibleCards[0]}px - 20px)`;
                    });
                    this.addSwitches(arrayCountVisibleCards[0]);
                } else if (window.screen.width < arrayBreakpoints[0] && window.screen.width >= arrayBreakpoints[1]) {
                    this.sliderLength.style.width = `${this.arrayCard.length / arrayCountVisibleCards[1] * this.window.clientWidth}px`;
                    if (this.count > 1) this.count = 1;
                    this.sliderLength.style.transform = `translate(${-this.count * this.window.clientWidth}px, 0)`;
                    this.arrayCard.forEach((card) => {
                        card.style.width = `calc(${this.window.clientWidth / arrayCountVisibleCards[1]}px - 30px)`;
                    });
                    this.addSwitches(arrayCountVisibleCards[1]);
                } else {
                    this.sliderLength.style.width = `${this.arrayCard.length / arrayCountVisibleCards[2] * this.window.clientWidth}px`;
                    this.sliderLength.style.transform = `translate(${-this.count * this.window.clientWidth}px, 0)`;
                    this.arrayCard.forEach((card) => {
                        card.style.width = `calc(${this.window.clientWidth / arrayCountVisibleCards[2]}px - 40px)`;
                    });
                    this.addSwitches(arrayCountVisibleCards[2]);
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
        this.sliderFlip();
    }

    sliderFlip() {
        switch(this.type) {
            case 'carousel':
                break;
            case 'switch':
                this.arraySwitches.forEach((switchPoint, index) => {
                    switchPoint.addEventListener('click', () => {
                        this.sliderLength.style.transform = `translate(${-index * this.window.clientWidth}px, 0)`;
                        this.count = index;
                    });
                });
        }
    }

    getData() {
        console.log('Тип:');
        console.log(this.type);
        switch(this.type) {
            case 'carousel':
                console.log('Левая стрелка:');
                console.log(this.leftArrow);
                console.log('Правая стрелка:');
                console.log(this.rightArrow);
                break;
            case 'switch':
                console.log('Родитель переключателей:');
                console.log(this.parentSwitch);
                console.log('HTML-код переключателя:')
                console.log(this.switch);
                console.log('Класс переключателя');
                console.log(this.switchClass);
                console.log('Массив переключателей:');
                console.log(this.arraySwitches);
                console.log('Позиция слайдера')
                console.log(this.count);
        }
        console.log('Окно слайдера:');
        console.log(this.window);
        console.log('Блок для карточек слайдера:');
        console.log(this.sliderLength);
        console.log('Массив карточек слайдера:');
        console.log(this.arrayCard);
    }
}