'use strict';

const sliderCoaches = new Slider('switch', ['coaches__ellipse', ['child', 'coaches__ellipse_mini', 'coaches__ellipse_mini_active']], 'slider', 'slider__length', 'slider__card', [3, 2, 1], [992, 576]);

sliderCoaches.resizing();
sliderCoaches.changeSliderSize();