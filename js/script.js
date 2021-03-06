import {tabs} from './modules/tabs';
import {timer} from './modules/timer';
import {modal} from './modules/modal';
import {cards} from './modules/cards';
import {forms} from './modules/forms';
import {slider} from './modules/slider';
import {calc} from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {

    tabs(".tabheader__item", ".tabcontent", ".tabheader__items", 'tabheader__item_active');
    timer('.timer', '2022-03-25');
    modal('[data-modal]', '.modal');
    cards();
    forms('form');
    slider({
        container:'.offer__slider',
        slide: '.offer__slide', 
        nextArrow: '.offer__slider-next',
        prewArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper'
    });
    calc();    
    
});