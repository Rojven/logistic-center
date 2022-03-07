import metrics from './services/metrics';
import Form from './modules/form/form';
import Burger from './modules/modals/burger';
import Observer from './modules/observer';
import Scroll from './modules/scroll';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    
    new Form('.form', 'input', '.form__input_checkbox', 'select', '.form__message', '.button_submit').init();
    new Burger('.burger-button', '.burger__close', '.burger', '.bg', '.burger__item', '.button_burger').init();
    new Observer('.view-anim').init();
    new Scroll('.scroll', 'section').init();
    metrics();
    
})