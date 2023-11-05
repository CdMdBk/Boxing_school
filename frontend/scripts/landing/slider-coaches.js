'use strict';

const sliderCoaches = new Slider('switch', 'coaches__ellipse', 'slider', 'slider__length', 'slider__card');
const arrayData = [[3, 2, 1], [992, 576]];

sliderCoaches.resizing(...arrayData);
sliderCoaches.changeSliderSize(...arrayData);